import styles from "./UserInfoComponent.module.css";
// import Icona from "/src/assets/profilo.png";

type UserInfoComponentProps = {
  testo: string;
};

const UserInfoComponent = ({ testo }: UserInfoComponentProps) => {
  return (
    <div className={styles.userInfo}>
      {/* <img src={Icona} alt="" className={styles.icona} /> */}
      <p>{testo}</p>
    </div>
  );
};

export default UserInfoComponent;
