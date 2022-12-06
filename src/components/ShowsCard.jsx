import { usePreviewCard } from "../context/PreviewCard";
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef, useState } from "react";

const ShowsCard = () => {
  const { previewCardData, setPreviewCardDataDebounce } = usePreviewCard()
  const cardRef = useRef()
  const [_previewCardData, _setPreviewCardData] = useState(previewCardData)

  
  const cardMouseLeave = () => {
    setPreviewCardDataDebounce(prev => ({ ...prev, visible: false }))
  }
  const cardMouseEnter = () => {
    setPreviewCardDataDebounce(prev => ({ ...prev, visible: true }))
  }


  useEffect(() => {
    _setPreviewCardData(prev => ({ ...prev, visible: false }))
    setTimeout(() => {
      _setPreviewCardData({ ...previewCardData })
    }, 200)
  }, [previewCardData])

  return (
    <CSSTransition
      in={_previewCardData.visible}
      timeout={300}
      nodeRef={cardRef}
      unmountOnExit
      classNames="shows-card"
    >
      <div
        className="w-80 absolute"
        style={_previewCardData && {
          top: _previewCardData.top - 170,
          left: _previewCardData.left - 170
        }}
        ref={cardRef}
        onMouseEnter={ cardMouseEnter }
        onMouseLeave={ cardMouseLeave }
      >
        { _previewCardData && <>
            <div className="w-full h-40">
              <img
                src={`../../../${_previewCardData.image}`}
                alt={_previewCardData.name}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-full h-40 bg-black show-card-bottom">
              <div className="text-white">
                { _previewCardData.name }
              </div>
            </div>
          </>
        }
      </div>
    </CSSTransition>
  )
}

export default ShowsCard;