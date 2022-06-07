export const navBarStyle = (currWidth) => {
    if (currWidth <= 320) return {
        height: "50px"
    }
    if (currWidth <= 480) return {
        height: "50px"
    }
    if (currWidth <= 768) return {
        height: "60px"
    }
    if (currWidth <= 1024) return {
        height: "60px"
    }
    if (currWidth <= 1200) return {
        height: "80px"
    }
}

export const logoContainerStyle = (currWidth) => {
    return currWidth <= 320 ? {
        
    } : 
    currWidth <= 480 ? {
        
    } : 
    currWidth <= 768 ? {
        
    } : 
    currWidth <= 1024 ? {
        
    } : 
    currWidth <= 1200 ? {
        
    } : 
    null
}

export const logoStyle = (currWidth) => {
    return currWidth <= 320 ? {
        width : "40px"
    } : 
    currWidth <= 480 ? {
        width : "40px"
    } : 
    currWidth <= 768 ? {
        width : "45px"
    } : 
    currWidth <= 1024 ? {
        width : "45px"
    } : 
    currWidth <= 1200 ? {
    
    } : 
    null
}

export const menusStyle = (currWidth) => {
    return currWidth <= 320 ? {
        
    } : 
    currWidth <= 480 ? {
        
    } : 
    currWidth <= 768 ? {
        
    } : 
    currWidth <= 1024 ? {

    } : 
    currWidth <= 1200 ? {
        
    } : 
    null
}

export const menuItemStyleContact = (currWidth) => {
    return currWidth <= 320 ? {
        
    } : 
    currWidth <= 480 ? {
        
    } : 
    currWidth <= 768 ? {
        
    } : 
    currWidth <= 1024 ? {
        marginLeft : "-13px"
    } : 
    currWidth <= 1200 ? {
        marginLeft : "-20px"
    } : 
    {
        marginLeft : "-20px"
    }
}

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
