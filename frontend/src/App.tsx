import logo from '../../doc/assets/ExGame logo.svg';
import classes from "./App.module.css";
function App() {

  return (
    <>
    <div className={classes.app}>
      <header className={classes.header}>
        <div className={classes.logoSection}>
          <img src={logo} alt="logo" /> 
          <nav className={classes.navigation}>
            <ul>
              <li><a href=" #">Dashboard</a></li>
              <li><a href=" #">Esami</a></li>
            </ul>
          </nav>
        </div>


        <div className={classes.userSection}>
          <ul>
            <li><p>Nome utente</p></li>
            <li><button className={classes.logoutBtn}>Logout</button></li>
          </ul>
        </div>
      </header>

      <div className={classes.container}>
        <div className={classes.teacherName}>
          <img src="#" alt="foto-profilo" />
          <p>Mario Rossi</p>
        </div>

        <div className={classes.materia}>
          <h2>Test di Matematica - Classe 1A</h2>
        </div>

        <div className={classes.info}>
          <div>
            <p>Bla Bla</p>
          </div>
          <div>
            <p>Bla Bla</p>
          </div>
          <div>
            <p>Bla Bla</p>
          </div>
        </div>

        <div className={classes.time}>
          <p className={classes.timeLable}>Tempo rimasto</p>
          <p className={classes.timeValue}>00:25:00</p>
        </div>

        <div className={classes.questions}>
          <div className={classes.question}>
            <form>
              <h4>Quanto fa 2+2?</h4>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">3</label>
              </div>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">2</label>
              </div>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">4</label>
              </div>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">Bla Bla Bla</label>
              </div>
            </form>
          </div>
          <div className={classes.question}>
            <form>
              <h4>Quanto fa 2+2?</h4>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">3</label>
              </div>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">2</label>
              </div>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">4</label>
              </div>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">Bla Bla Bla</label>
              </div>
            </form>
          </div>
          <div className={classes.question}>
            <form>
              <h4>Quanto fa 2+2?</h4>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">3</label>
              </div>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">2</label>
              </div>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">4</label>
              </div>
              <div className={classes.answer}>
                <input type="radio" name="answer" id="answer" />
                <label htmlFor="answer">Bla Bla Bla</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
