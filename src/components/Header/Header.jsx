import React from 'react'
import logo from '../../assets/img/trello.png'
import './Header.scss'
import { NavLink } from 'react-router-dom'


const Header = ({isAuth,username}) => {
    return (
        <header>
            <NavLink to='/'>
                <div className="header__logo">
                    <img className="header__logo-img" alt ='logo' src ={logo}/>
                    <h1 className="header__logo-title">FakeTrello</h1>
                </div>
            </NavLink>
            
            {isAuth
                ?
                <div>
                    <span>{username}</span>
                    <button>Выйти</button>
                </div>
                :
                null
            }
        </header>
    )
}

export default Header