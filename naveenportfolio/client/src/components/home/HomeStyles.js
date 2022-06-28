export const h1Style = (currWidth) => {
    return currWidth <= 320 ? {
        fontSize : "3rem"
    } : 
    currWidth <= 440 ? {
        fontSize : "3.8rem",
        
    } : 
    currWidth <= 550 ? {
        fontSize : "4.5rem"
    } :
    currWidth <= 768 ? {
        fontSize : "5rem"
    } : 
    currWidth <= 1024 ? {
    } : 
    currWidth <= 1200 ? {
    } : 
    null
}







export const paragraphStyle = (currWidth) => {
    return currWidth <= 320 ? {
        width : "100%",
        fontSize : "1.8rem", 
    } : 
    currWidth <= 440 ? {
        width : "100%",
        fontSize : "1.8rem",
    } : 
    currWidth <= 550 ? {
        fontSize : "1.8rem",
        width : "100%"
    } :
    currWidth <= 768 ? {
        width : "82%"
    } : 
    currWidth <= 1024 ? {
        width : "80%"
    } : 
    currWidth <= 1200 ? {
        width : "70%"
    } : 
    null
}