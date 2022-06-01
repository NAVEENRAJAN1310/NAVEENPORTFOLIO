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