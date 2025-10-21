import { useContext } from "react";
import { AuthenticationContext } from "../components/AuthenticationProvider/AuthenticationProvider";
import { useNavigate } from "react-router";

const Login = () => {
    const ctx = useContext(AuthenticationContext)
    const navigate = useNavigate()
    return(
        <div>
            <form noValidate>
                <label htmlFor="nome">Nome</label>
                <input
                type="text"
                name=""
                id="nome"
                placeholder="Nome..."
                onChange={
                    (e) => {
                        const nome = e.target.value;
                        ctx.setUsername(nome);
                    }
                }
                />
                <button 
                type="submit"
                onClick={
                    (e) => {
                        e.preventDefault();
                        ctx.setAuthenticated(true);
                        navigate('/')
                    }
                }
                >Login</button>
            </form>
        </div>
    )
}

export default Login