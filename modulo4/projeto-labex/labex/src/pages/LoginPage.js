import React, {useState, useContext} from 'react'
import "../pages/styles.css"
import { AuthContext } from './auth'

const LoginPage = () => {
    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("submit", {email, password})    
    }
    return(
        <div id='login'>
            <h1 className='title'>Login</h1>
            <form className='=form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="email" >Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id ="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}/>
                </div>

                <div className='field'>
                    <label htmlFor="password" >Senha</label>
                    <input 
                    type="password" 
                    name="password" 
                    id ="password"
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div className='actions'>
                    <button type = "submit"> Entrar</button>
                </div>

            </form>
        </div>
    )
}

export default LoginPage