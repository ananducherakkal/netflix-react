import { createContext, useContext, useState } from "react";
import debounce from "../utils/debounce";


const previewCardContext = createContext(null)

export const usePreviewCard = () => useContext(previewCardContext)

export const PreviewCard = ({ children }) => {
  const [previewCardData, setPreviewCardData] = useState({ visible: false })

  const setPreviewCardDataWithoutDebounce = (data) => {
    console.log('widthout debounce called')
    setPreviewCardData(data)
  }

  const setPreviewCardDataDebounce = debounce((data) => {
    setPreviewCardData(data)
    console.log('debounce caled')
  }, 700)

  return (
    <previewCardContext.Provider value={{ previewCardData, setPreviewCardDataWithoutDebounce, setPreviewCardDataDebounce }}>
      { children }
    </previewCardContext.Provider>
  )
}

