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

export const useSetScroll = (setValue) => {
  const contextProvider = useContext(ContextProvider);
  contextProvider.setScrollngAnime(setValue);
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

  const[isScrlling, setScrolling] = useState(true);

  useEffect(() => {

    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;


    const isScrollingUp = (currentScrollYPosition) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);


    const updateScrollDirection = (e) => {

      console.log(isScrlling)
      if (isScrlling) {
        window.scrollTo(0, 0);
      } else {
      const currentScrollYPosition = window.scrollY;
      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? scrollDirection.down
          : scrollDirection.up;
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [isScrlling])


  return (
    <ContextProvider.Provider value={{ scrState: scrollDir , windowPos: positions, setScrollngAnime : setScrolling}}>
      {props.children}
    </ContextProvider.Provider>
  )
}

export default Context