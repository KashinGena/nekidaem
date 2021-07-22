import React from 'react'
import './Authorization.scss'
import {useDispatch,useSelector} from 'react-redux'
import {auth} from '../../redux/actions/auth'
import { NavLink, Redirect } from 'react-router-dom'



const Login = ({history,...rest}) => {
    const [name,setName] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [tryToAuth,setTryToAuth]= React.useState(false)
    const error = useSelector( state => state.authReducer.error)
    const isAuth = useSelector( state => state.authReducer.isAuth)

    const dispatch = useDispatch()
    

    const onLoginHandler = (e) => {
        e.preventDefault();
        const payload = {
            'username': name,
            'password': password
        } 
        dispatch(auth(payload,true))
        setTryToAuth(true)
      
    }
    if (isAuth) return (<Redirect to='/board'/>)
    return (
        <div className="auth">
            <h1 className="auth__title">Авторизация</h1>
            <form action="" className="auth__form">
                <input
                    className='auth__input'
                    type='text' placeholder='name (required)'
                    value={name}
                    onChange= {(event) =>{
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
                    type='text' placeholder='password (required)'
                    value={password}
                    onChange= {(event) => {
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
                    Войти
                </button>
            </form>
            <div className="auth__reminder">Нет аккаунта? <NavLink to='/register'>Зарегистрируйтесь</NavLink></div>
        </div>
    )
}

export default Login