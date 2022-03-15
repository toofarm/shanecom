import React, { FC, RefObject, useRef, useState, useEffect } from 'react'
import useIntersectionObserver from 'hooks/use_intersection_observer' 
import styles from './ProgressBar.module.scss'
import useWindowResize from 'hooks/use_window_size'

// Props
type TProps = {
  article: RefObject<HTMLDivElement>
}

const ProgressBar:FC<TProps> = ({ article }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const progress = useRef<HTMLProgressElement>(null)
  const { height } = useWindowResize()

  function getScrollProgress(el:RefObject<HTMLDivElement>) {
    let progressPercentage = 0 
    if (el.current && isVisible && height) {
      const coords = el.current.getBoundingClientRect()
      const elHeight = coords.height - height
  
      if (isVisible && coords.top < 0) {
        progressPercentage = (Math.abs(coords.top) / elHeight) * 100
      }
    }
    return progressPercentage.toString()
  }
  
  function showReadingProgress() {
    if (progress.current) {
      progress.current.setAttribute('value', getScrollProgress(article))
    }
  }

  useIntersectionObserver({
    target: article,
    onIntersect: ([{ isIntersecting }]: any, observerElement: { unobserve: (arg0: HTMLDivElement | null) => void }) => {
      setIsVisible(true)
    }
  })

  useEffect(() => {
    if (window) window.addEventListener('scroll', showReadingProgress)

    return () => window.removeEventListener('scroll', showReadingProgress)
  })

  return (
    <progress ref={progress} className={styles.progress} max={100} value={0}></progress>
  )
}

export default ProgressBar