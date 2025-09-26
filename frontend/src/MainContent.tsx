import styles from "./App.module.css";
import UserInfo from "./UserInfo";
import Quiz from "./Quiz";

const MainContent: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <UserInfo />
      </div>
      <div>
        <Quiz/>
      </div>
    </div>
  );
};

export default MainContent;
