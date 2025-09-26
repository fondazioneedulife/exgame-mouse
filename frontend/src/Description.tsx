import classes from "./Description.module.css";


export const Description = ({Children, type}) => {
    let className = "";
    if (type === "info") {
        className = classes.info;
    }

    if (type === "warning") {
        className = classes.warning;
    }

    return (
        <p className={className}>Descrizione:{Children} </p>
    );
}
