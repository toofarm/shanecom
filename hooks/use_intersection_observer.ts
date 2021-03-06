import React, { RefObject, useEffect } from 'react'

// Props
type TProps = {
  target: RefObject<HTMLDivElement>;
  onIntersect: any;
  threshold?: number;
  rootMargin?: string;
}

const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 0,
  rootMargin = '0px'
}:TProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect,
      {
        rootMargin,
        threshold
      })
    let current: Element | null = null
    if (target) {
      current = target.current
      if (current) {
        observer.observe(current)
      }
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  })
}
export default useIntersectionObserver