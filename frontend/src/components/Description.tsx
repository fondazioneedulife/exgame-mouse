import classes from './Description.css'

export const Description = ({ children, type }) => {
    let className = "";
    if (type === "info") {
        className = classes.info;
    }
    if (type === "warning") {
        className = classes.warning
    }
    return <p className={className}> Descrizione: {children} </p>;}