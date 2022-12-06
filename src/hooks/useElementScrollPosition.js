import { useEffect, useState } from 'react'

export const useElementScrollPosition = (ref, direction = 'y') => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const instance = ref.current
    const updatePosition = () => {
      if (direction === 'x') {
        setScrollPosition(instance.scrollLeft)
      } else {
        setScrollPosition(instance.scrollTop)
      }
    }
    instance.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => { instance.removeEventListener('scroll', updatePosition) }
  }, [])

  return scrollPosition
}