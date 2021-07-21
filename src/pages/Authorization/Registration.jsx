import React from 'react'
import './Authorization.scss'
import {useDispatch} from 'react-redux'
import {auth} from '../../redux/actions/auth'
import { NavLink, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Registration = (props) => {
   const {history} =props
    
    
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [tryToAuth,setTryToAuth]= React.useState(false)
    const error = useSelector( state => state.authReducer.error)
    const isAuth = useSelector( state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    console.log(props);
    
    
    const onLoginHandler = (e) => {
        e.preventDefault();
        const payload = {
            'username': name,
            'email':email,
            'password': password
        } 
       
        dispatch(auth(payload,false)) 
        setTryToAuth(true) 
        if (isAuth) history.replace('/board')
        
       
    }

    return (
     
        <div className="auth">
            <h1 className="auth__title">Регистрация</h1>
            <form action="" className="auth__form">
                <input
                    className ='auth__input'
                    type ='text' placeholder='name (required)'
                    value = {name}
                    onChange = {(event) => { 
                                setName(event.target.value)
                                setTryToAuth(false)
                              }}
                    required
                />
                {error && error.username && tryToAuth && 
                    <div className="auth__error">{error.username[0]}</div>
                }
                <input
                    className='auth__input'
                    type='text' placeholder='email'
                    value={email}
                    onChange = {(event) => { 
                        setEmail(event.target.value)
                        setTryToAuth(false)
                      }}
                />
                {error && error.email  && tryToAuth && 
                    <div className="auth__error">{error.email[0]}</div>
                }
                <input
                    className='auth__input'
                    type='text' placeholder='password (required)'
                    value={password}
                    onChange = {(event) => { 
                        setPassword(event.target.value)
                        setTryToAuth(false)
                      }}
                    required
                />
                {error && error.password  && tryToAuth && 
                    <div className="auth__error">{error.password[0]}</div>
                }
                
                <button className="auth__login-btn"
                        onClick={onLoginHandler}
                >
                    Регистрация
                </button>
            </form>
            <div className="auth__reminder">Уже есть аккаунт? <NavLink to='/login'>Войти</NavLink></div>
        </div>
    
    )
}

export default Registration