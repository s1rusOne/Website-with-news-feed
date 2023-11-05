import React, {useContext} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from './../components/UI/button/MyButton';
import { AuthContext } from '../context';

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {

        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput text="text" placeholder='Login'/>
                <MyInput text="password" placeholder='Password'/>
                <MyButton>Log In</MyButton>
                <div style={{color: "white"}}>You can write a random login and password<p></p>System pass you in site</div>
            </form>
        </div>
    )
}

export default Login
