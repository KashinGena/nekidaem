import React from 'react'
import './Authorization.scss'
import {useDispatch} from 'react-redux'
import {auth} from '../../redux/actions/auth'
import { NavLink } from 'react-router-dom'


const Login = () => {
    
    
 
    const [name,setName] = React.useState('')
    const [password,setPassword] = React.useState('')
    const dispatch = useDispatch()
    
    const onLoginHandler = (e) => {
        e.preventDefault();
        const payload = {
            'username': name,
            'password': password
        } 
        dispatch(auth(payload))
    }

    return (
        <div className="auth">
            <h1 className="auth__title">Авторизация</h1>
            <form action="" className="auth__form">
                <input
                    className='auth__input'
                    type='text' placeholder='name'
                    value={name}
                    onChange= {(event) =>setName(event.target.value)}
                    required
                />
                <input
                    className='auth__input'
                    type='text' placeholder='password'
                    value={password}
                    onChange= {(event) =>setPassword(event.target.value)}
                    required
                />
                
                <button className="auth__login-btn"
                        onClick={onLoginHandler}
                >
                    Войти
                </button>
            </form>
            <div>Нет аккаунта? <NavLink to='/register'>Зарегистрируйтесь</NavLink></div>
        </div>
    )
}

export default Login