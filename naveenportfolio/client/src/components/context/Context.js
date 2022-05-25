import React, { useContext, useEffect, useState } from 'react'


const ContextProvider = React.createContext();

export const useDime = ()=>{
    return useContext(ContextProvider);        
}


const Context = (props) => {

    const [scroll, setScroll] = useState({scrolltoTop: "false",scrolltoBottom: "false"});

    useEffect(()=>{

        const initialY = window.pageYOffset;
        const getScrollValues = (e)=>{
            setScroll((prev)=>{
                console.log("initial "+ initialY)
                const scrollY = window.pageYOffset;
                const scrollX = window.pageXOffset;
                console.log("scrollY "+ scrollY)
                if(initialY > scrollY) {
                      return {...prev,scrolltoTop: "true"}  
                }

                return {...prev}
            })
        }

        window.addEventListener("scroll",getScrollValues);

        return(()=>{
            window.removeEventListener("scroll",getScrollValues);
        })

    },[scroll,setScroll])

  return (
    <ContextProvider.Provider value={{scrollVal : scroll, setScrollVal : setScroll}}>
            {props.children}
    </ContextProvider.Provider>
  )
}

export default Context