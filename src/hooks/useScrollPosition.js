import { useEffect, useState } from 'react'

export const useScrollPosition = (direction = 'y') => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      if (direction === 'x') {
        setScrollPosition(window.pageXOffset)
      } else {
        setScrollPosition(window.pageYOffset)
      }
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}