import { Route, Routes } from "react-router";
import styles from "./App.module.css";
import { MySubscriptions } from "./pages/student/mySubscriptions";
import { Subscription } from "./pages/Subscription";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <div className={styles.main}>
        <div className={styles.content}>
          <Routes>
            <Route index element={<MySubscriptions />} />
            <Route path="subscription" element={<Subscription />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
