import { createContext, useContext, useState } from "react";
import debounce from "../utils/debounce";


const previewCardContext = createContext(null)

export const usePreviewCard = () => useContext(previewCardContext)

export const PreviewCard = ({ children }) => {
  const [previewCardData, setPreviewCardData] = useState({ visible: false })

  // const setPreviewCardDataWithoutDebounce = (data) => {
  //   setPreviewCardData(data)
  // }

  // const setPreviewCardDataDebounce = debounce((data) => {
  //   setPreviewCardData(data)
  // }, 500)

  return (
    <previewCardContext.Provider value={{ previewCardData, setPreviewCardData }}>
      { children }
    </previewCardContext.Provider>
  )
}

