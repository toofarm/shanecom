import React, { FC, RefObject, useRef, useState } from 'react'
import useIntersectionObserver from 'hooks/use_intersection_observer'

// Props
type TProps = {
  post: RefObject<HTMLDivElement>
}

const ProgressBar:FC<TProps> = ({ post }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const progress = useRef(null)

  // Look at this to fix this issue https://stackoverflow.com/questions/60231307/react-get-element-getboundingclientrect-after-window-resize
  function getScrollProgress(el:RefObject<HTMLDivElement>) {
    const coords = el.getBoundingClientRect()
    const height = coords.height
    let progressPercentage = 0
  
    if (isVisible && coords.top < 0) {
      progressPercentage = (Math.abs(coords.top) / height) * 100
    }
  
    return progressPercentage
  }
  
  function showReadingProgress() {
    progress.setAttribute('value', getScrollProgress(post))
  }

  useIntersectionObserver({
    target: post,
    rootMargin: '15px',
    onIntersect: ([{ isIntersecting }]: any, observerElement: { unobserve: (arg0: HTMLDivElement | null) => void }) => {
      if (isIntersecting) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  })

  return (
    <progress ref={progress}></progress>
  )
}

export default ProgressBar