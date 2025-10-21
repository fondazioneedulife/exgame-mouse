import { useContext } from 'react';
import { AuthentionContext } from '../authentication/AuthenticationProvider';
import style from './Login.modules.css'

const Login = () => {
    const ctx=useContext(AuthentionContext);
    const navigatorate = useNavigate();
    return (
        <div className={style.loginContainer}>
            <form className={style.loginForm}>
                <label htmlFor="nome">HOME</label>
                <input type="text"
                    id="nome"
                    type="text"
                    placeholder="Enter your name"
                    onChange={
                        (e) =>{
                            const nome = e.target.value;
                            ctx.setUsername(nome)
                        }
                    }      
                />
                <button
                    className={style.loginBtn}
                    type="submit"
                    onClick={
                        (e) => {
                            e.preventDefault();
                            ctx.setAuthenticated(true);
                            navigate('/');
                        }
                    }
                >Login </button>

            </form>

        </div>
    )
    }



