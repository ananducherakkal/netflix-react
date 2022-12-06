import { usePreviewCard } from "../context/PreviewCard";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import PlayIcon from "../icons/PlayIcon";
import PlusIcon from "../icons/PlusIcon";
import ThumbsupIcon from "../icons/ThumbsupIcon";
import ChevronIcon from "../icons/ChevronIcon";

const ShowsCard = () => {
  const { previewCardData, setPreviewCardData } = usePreviewCard()
  const cardRef = useRef()
  // const [_previewCardData, _setPreviewCardData] = useState(previewCardData)

  
  const cardMouseLeave = () => {
    // setPreviewCardDataDebounce(prev => ({ ...prev, visible: false }))
    setPreviewCardData(prev => ({ ...prev, visible: false }))
  }
  // const cardMouseEnter = () => {
  //   setPreviewCardDataDebounce(prev => ({ ...prev, visible: true }))
  // }


  // useEffect(() => {
  //   _setPreviewCardData(prev => ({ ...prev, visible: false }))
  //   setTimeout(() => {
  //     _setPreviewCardData({ ...previewCardData })
  //   }, 200)
  // }, [previewCardData])

  return (
    <CSSTransition
      in={previewCardData.visible}
      timeout={100}
      nodeRef={cardRef}
      unmountOnExit
      classNames="shows-card"
    >
      <div
        className="absolute"
        style={previewCardData && {
          width: ((previewCardData.cardWidth * 100) / 60),
          top: previewCardData.top - 170,
          left: previewCardData.left - (((previewCardData.cardWidth * 100) / 60) / 2),
        }}
        ref={cardRef}
        // onMouseEnter={ cardMouseEnter }
        onMouseLeave={ cardMouseLeave }
      >
        { previewCardData && <>
            <div className="w-full">
              <img
                src={`../../../${previewCardData.image}`}
                alt={previewCardData.name}
                className="w-full object-fill aspect-video"
              />
            </div>
            <div className="w-full h-32 px-5 bg-zinc-900 show-card-bottom">
              <div className="flex py-6  w-full">
                <button className="card-btn bg-slate-300 mr-2 hover:bg-slate-100">
                  <PlayIcon className="fill-zinc-800 w-7 h-7" color="inherit" />
                </button>
                <button className="card-btn bg-transparent mr-2">
                  <PlusIcon className="stroke-slate-300 w-7 h-7" color="inherit" />
                </button>
                <button className="card-btn bg-transparent mr-2">
                  <ThumbsupIcon className="stroke-slate-300 w-5 h-5" color="inherit" />
                </button>
                <button className="card-btn bg-transparent ml-auto">
                  <ChevronIcon className="stroke-slate-300 w-5 h-5" color="#fff" />
                </button>
              </div>
            </div>
          </>
        }
      </div>
    </CSSTransition>
  )
}

export default ShowsCard;