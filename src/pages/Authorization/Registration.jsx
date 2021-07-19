import React from 'react'
import './Authorization.scss'
import {useDispatch} from 'react-redux'
import {auth} from '../../redux/actions/auth'
import { NavLink} from 'react-router-dom'



const Registration = () => {
    
    
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const dispatch = useDispatch()
    
    
    const onLoginHandler = (e) => {
        e.preventDefault();
        const payload = {
            'username': name,
            'email':email,
            'password': password
        } 
        dispatch(auth(payload))
           
    }

    return (
     
        <div className="auth">
            <h1 className="auth__title">Регистрация</h1>
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
                    type='text' placeholder='email'
                    value={email}
                    onChange= {(event) =>setEmail(event.target.value)}
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
                    Регистрация
                </button>
            </form>
            <div>Уже есть аккаунт? <NavLink to='/login'>Войти</NavLink></div>
        </div>
    
    )
}

export default Registration