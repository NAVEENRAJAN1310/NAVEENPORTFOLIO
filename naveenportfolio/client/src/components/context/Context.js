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

// export const mediaQuery = (userWidth1,userWidth2=0,userWidth3=0) => {
//   const contextProvider = useContext(ContextProvider);
//   const windowWidth = contextProvider.windowPos.wwidth;
//   if(windowWidth < userWidth1 && windowWidth >= userWidth2) return "first";
//   if(windowWidth < userWidth2 && windowWidth >= userWidth3) return "second";
//   if(windowWidth < userWidth3 ) return "third";
// }


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

const [media, setMedia] = useState("");

useEffect(()=>{
  const handleResize = ()=> {
      setPositions({
          wwidth : window.innerWidth,
          wheight: window.innerHeight
      })
      if(window.innerWidth < 420 && window.innerWidth >= 0) {
        setMedia("third")
      } else if (window.innerWidth < 820 && window.innerWidth >= 420) {
        setMedia("second")
      } else if (window.innerWidth < 1050 && window.innerWidth >= 820) {
        setMedia("first")
      }
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
    <ContextProvider.Provider value={{ scrState: scrollDir , windowPos: positions, setScrollngAnime : setScrolling,  mediaState : media}}>
      {props.children}
    </ContextProvider.Provider>
  )
}

export default Context