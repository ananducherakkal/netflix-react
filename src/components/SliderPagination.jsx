import { useState } from "react";

const SliderPagination = ({ totalSlides, currentSlide}) => {
  return (
    <div className="ml-auto flex space-x-2 items-center pagination opacity-0 transition-opacity">
      {
        Array.from({length: totalSlides}).map((_, index) => (
          <div key={`${Math.random().toString(16).slice(2)}_${index}`} className={`h-0.5 w-3 ${index === (-1 * currentSlide) ? 'bg-slate-100': 'bg-gray-600'}`}></div>
        ))
      }
    </div>
  )
}

export default SliderPagination;