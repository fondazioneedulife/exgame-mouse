
import styles from "./Description.module.css"


type DescriptionProps = {
    classe : string;
    tipoDiTest:string;

}


const Description = ({ classe,tipoDiTest }: DescriptionProps) => {
  
 
  return (
    <p className={styles.descrizione}>
      Test di {tipoDiTest}, - Classe {classe}
    </p>
  );
};

export default Description;