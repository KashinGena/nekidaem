import React from 'react'
import logo from '../../assets/img/trello.png'
import './Header.scss'
import { NavLink } from 'react-router-dom'


const Header = ({isAuth,userName,onLogout}) => {

    return (
        <header className='header'>
            <NavLink to='/board'>
                <div className="header__logo">
                    <img className="header__logo-img" alt ='logo' src ={logo}/>
                    <h1 className="header__logo-title">FakeTrello</h1>
                </div>
            </NavLink>
            
            {isAuth ?
                <div className='header__login-container'>
                    <span className="header__login-user">{userName}</span>
                    <button className='header__login-auth'
                            onClick={onLogout}
                    >
                        Выйти
                    </button>
                </div>
                :
                <div className='header__login-container'>
                    <NavLink to='/register'>
                        <button className='header__login-auth'
                                onClick={onLogout}
                        >
                            Авторизация
                        </button>
                    </NavLink>
                </div>
            }
        </header>
    )
}

export default Header