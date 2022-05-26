import React, { useContext, useEffect, useState } from 'react'


const ContextProvider = React.createContext();

export const useDime = ()=>{
    return useContext(ContextProvider);        
}

const scrollDirection= {
    up : "up",
    down : "down"
  }


const Context = (props) => {
    const threshold = 100;
    const [scrollDir, setScrollDir] = useState(scrollDirection.up);
    
    // const previousScroll = useRef(0);

    

    useEffect(()=>{

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

    },[])


  return (
    <ContextProvider.Provider value={{scrState : scrollDir}}>
            {props.children}
    </ContextProvider.Provider>
  )
}

export default Context