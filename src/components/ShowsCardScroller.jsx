import { useEffect, useRef, useState } from "react";
import { usePreviewCard } from "../context/PreviewCard";
import { useElementScrollPosition } from "../hooks/useElementScrollPosition";
import ChevronIcon from "../icons/ChevronIcon";

const ShowsCardScroller = ({ shows, onCardHover }) => {
  const scrollContainer = useRef()
  const scrollPosition = useElementScrollPosition(scrollContainer, 'x')
  const [maxScrollAcheived, setMaxScrollAcheived] = useState(false)
  const { previewCardData, setPreviewCardDataDebounce } = usePreviewCard()

  useEffect(() => {
    setMaxScrollAcheived(scrollPosition >= (scrollContainer.current.scrollWidth - scrollContainer.current.offsetWidth))
  }, [scrollPosition])

  const cardMouseEnter = (e, show) => {
    const card = e.target
    var bodyPosition = document.body.getBoundingClientRect()
    var position = card.getBoundingClientRect();
    const width = card.offsetWidth
    const height = card.offsetHeight
    setPreviewCardDataDebounce({
      ...show,
      left: (position.left - bodyPosition.left + (width / 2)),
      top: (position.top - bodyPosition.top + (height / 2)),
      visible: true
    })
  }

  const cardMouseLeave = () => {
    setPreviewCardDataDebounce({ ...previewCardData, visible: false })
  }

  const scrollLeft = () => {
    scrollContainer.current.scrollLeft -= 400
  }
  const scrollRight = () => {
    scrollContainer.current.scrollLeft += 400
  }
  return (
    <div className="w-screen relative overflow-x-hidden">
      {scrollPosition > 50 && <button className="show-scroll-btn left-0" onClick={scrollLeft}>
        <ChevronIcon direction="left" color="#fff"/>
      </button>}
      <div ref={scrollContainer} className="flex space-x-2 px-12 scroll-container">
        { shows && shows.map((show) => (
          <div
            key={show.name}
            className="flex-shrink-0 cursor-pointer scroll-card"
            onMouseEnter={(e) => { cardMouseEnter(e, show) }}
            onMouseLeave={cardMouseLeave}
          >
            <img src={`../../../${show.image}`} alt={show.name} />
          </div>
        ))}
      </div>
      {
        !maxScrollAcheived && <button className="show-scroll-btn right-0" onClick={scrollRight}>
          <ChevronIcon direction="right" color="#fff"/>
        </button>
      }
    </div>
  )
}

export default ShowsCardScroller;