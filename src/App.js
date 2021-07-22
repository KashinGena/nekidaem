import React from 'react'
import './styles/App.scss';
import Registration from './pages/Authorization/Registration';
import Header from './components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import Board from './pages/Board/Board';
import {useSelector, useDispatch} from 'react-redux'
import Login from './pages/Authorization/Login';
import { autoAuthSuccess,logout, autoAuth } from './redux/actions/auth';


 
function App() {
  const isAuth = useSelector ( state => state.authReducer.isAuth)
  const userName = useSelector(state => state.authReducer.userName)

  const dispatch = useDispatch()
  
React.useEffect(() => {
  console.log(localStorage);
  
  const token = localStorage.getItem('token')
  const username = localStorage.getItem('username')
  console.log(token);
  
  if (token)
    dispatch(autoAuthSuccess(token,username))
    else
    dispatch(autoAuth())
},[])

const onLogoutHandler = () => {
  dispatch(logout())
}

  return (
    <div className="app">
      <div className='container'>
        <Header isAuth={isAuth} userName={userName} onLogout={onLogoutHandler}/>     
          <Switch>
            <Route exact path ='/'>
              {isAuth? <Redirect to='/board'/> : <Redirect to='/register'/>}
            </Route>
            <Route exact path ='/login'  component =  {Login}/>
            <Route exact path ='/register' component = {Registration}/>
            {isAuth && <Route exact path ='/board' render = {() =><Board/>}/>}
          </Switch>   
      </div>
    </div>
  )
  }

export default App;
