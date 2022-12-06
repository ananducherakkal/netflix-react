import { useEffect, useRef, useState } from "react";
import { usePreviewCard } from "../context/PreviewCard";
import { useElementScrollPosition } from "../hooks/useElementScrollPosition";
import ChevronIcon from "../icons/ChevronIcon";
import SliderPagination from "./SliderPagination";

const ShowsCardScroller = ({ category }) => {
  const scrollContainer = useRef()
  const { previewCardData, setPreviewCardData } = usePreviewCard()
  const [cardsPerSlide, setCardsPerSlide] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Cards per slide
  const updateCardsPerSlide = () => {
    const scrollContainerStyles = window.getComputedStyle(scrollContainer.current)
    setCardsPerSlide(scrollContainerStyles.getPropertyValue("--show-items"))
  }

  useEffect(() => {
    window.addEventListener("resize", updateCardsPerSlide)
    updateCardsPerSlide()
    return () => window.addEventListener("resize", updateCardsPerSlide)
  }, [])

  const totalSlides = category.movies.length / cardsPerSlide + ((category.movies.length % cardsPerSlide) === 0 ? 0 : 1)

  const scrollLeft = () => {
    setCurrentSlide(prev => prev + 1)
  }
  const scrollRight = () => {
    setCurrentSlide(prev => prev - 1)
  }


  const cardMouseEnter = (e, show) => {
    const card = e.target
    var bodyPosition = document.body.getBoundingClientRect()
    var position = card.getBoundingClientRect();
    const width = card.offsetWidth
    const height = card.offsetHeight
    setPreviewCardData({
      ...show,
      left: (position.left - bodyPosition.left + (width / 2)),
      top: (position.top - bodyPosition.top + (height / 2)),
      cardWidth: width,
      cardHeight: height,
      visible: true
    })
  }

  // const cardMouseLeave = () => {
  //   setPreviewCardData({ ...previewCardData, visible: false })
  // }
  return (
    <div className="flex flex-col slider-contianer">
      <div className="flex felx-row mb-2 px-12">
        <div className="text-neutral-200 text-lg font-semibold">
          { category.category }
        </div>
        <SliderPagination totalSlides={totalSlides} currentSlide={currentSlide} />
      </div>
      <div className="w-full relative overflow-x-hidden">
        {currentSlide < 0 && <button className="show-scroll-btn left-0" onClick={scrollLeft}>
          <ChevronIcon direction="left" color="#fff"/>
        </button>}
        <div ref={scrollContainer} className="flex mx-12 scroll-container" style={{ transform: `translateX(${currentSlide * 100}%)` }}>
          { category.movies && category.movies.map((show) => (
            <div
              key={show.id}
              className="flex-shrink-0 cursor-pointer scroll-card"
              onMouseEnter={(e) => { cardMouseEnter(e, show) }}
              // onMouseLeave={cardMouseLeave}
            >
              <img src={`../../../${show.image}`} alt={show.name} className="w-full" />
            </div>
          ))}
        </div>
        {
          ((-1 * currentSlide) < totalSlides - 2) && <button className="show-scroll-btn right-0" onClick={scrollRight}>
            <ChevronIcon direction="right" color="#fff"/>
          </button>
        }
      </div>
    </div>
  )
}

export default ShowsCardScroller;