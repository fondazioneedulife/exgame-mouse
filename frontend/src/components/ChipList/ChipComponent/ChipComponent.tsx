
import styles from "./ChipComponent.module.css"


type ChipComponentProps = {
    type : string
    testo : string;

}


const ChipComponent = ({ testo, type }: ChipComponentProps) => {
  
 
  return (
    <p className={styles.chip}>
     {type} : {testo}
    </p>
  );
};

export default ChipComponent;