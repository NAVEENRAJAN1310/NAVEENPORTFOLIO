import React, { useContext, useEffect, useState } from 'react'


const ContextProvider = React.createContext();

export const useDime = () => {
  return useContext(ContextProvider);
}

export const useWinWidthGreat = (userWidth) => {
  const contextProvider = useContext(ContextProvider);
  const windowWidth = contextProvider.windowPos.wwidth;
  if (windowWidth > userWidth) return true;
  return false;
}

export const useWinWidthLesser = (userWidth) => {
  const contextProvider = useContext(ContextProvider);
  const windowWidth = contextProvider.windowPos.wwidth;
  if (windowWidth < userWidth) return true;
  return false;
}

const scrollDirection = {
  up: "up",
  down: "down"
}


const Context = (props) => {

  const [positions,setPositions] = useState({
    wwidth: window.innerWidth,
    wheight: window.innerHeight
})

useEffect(()=>{
  const handleResize = ()=> {
      setPositions({
          wwidth : window.innerWidth,
          wheight: window.innerHeight
      })
  }
  window.addEventListener("resize",handleResize);
  return(()=>{
      window.removeEventListener("resize",handleResize);
  })
},[])



  const threshold = 0;
  const [scrollDir, setScrollDir] = useState(scrollDirection.up);

  useEffect(() => {

    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;


    const isScrollingUp = (currentScrollYPosition) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);


    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;
      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? scrollDirection.down
          : scrollDirection.up;
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [])


  return (
    <ContextProvider.Provider value={{ scrState: scrollDir , windowPos: positions}}>
      {props.children}
    </ContextProvider.Provider>
  )
}

export default Context