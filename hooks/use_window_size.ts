import { useEffect, useState } from 'react'

type TWindowSize = {
  width: number | undefined;
  height: number | undefined;
}

const useWindowResize = ():TWindowSize => {
  const [windowSize, setWindowSize] = useState<TWindowSize>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize',
      handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize',
      handleResize)
  },
  [])
  return windowSize
}

export default useWindowResize