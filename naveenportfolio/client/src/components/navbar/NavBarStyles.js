export const menuIconStyle = (currWidth) => {
    if (currWidth <= 420) return {
        width: "40px",
        height: "40px",
        transform: "translateY(-50%)",
        top: "50%",
        backgroundColor: "green"
    }
    if (currWidth <= 820) return {
        width: "40px",
        height: "40px",
        transform: "translateY(-50%)",
        top: "50%",
        backgroundColor: "yellow"
    }
    if (currWidth <= 1050) return {
        width: "40px",
        height: "40px",
        transform: "translateY(-50%)",
        top: "50%",
        backgroundColor: "red"
    }
}

export const navBarStyle = (currWidth) => {
    if (currWidth <= 320) return {
        
    }
    if (currWidth <= 480) return {
        
    }
    if (currWidth <= 768) return {
        
    }
    if (currWidth <= 1024) return {
        
    }
    if (currWidth <= 1200) return {
        
    }
}