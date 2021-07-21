import React from 'react'
import './styles/App.scss';
import Registration from './pages/Authorization/Registration';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Board from './pages/Board/Board';
import {useSelector, useDispatch} from 'react-redux'
import Login from './pages/Authorization/Login';
import { autoAuth,logout } from './redux/actions/auth';


 
function App() {
  const isAuth = useSelector ( state => state.authReducer.isAuth)
  const userName = useSelector(state => state.authReducer.userName)

  const dispatch = useDispatch()
  
React.useEffect(() => {
  if (!isAuth)
    dispatch(autoAuth())
},[isAuth])

const onLogoutHandler = () => {
  dispatch(logout())
}

  return (
    <div className="app">
      <div className='container'>
        <Header isAuth={isAuth} userName={userName} onLogout={onLogoutHandler}/>
        {!isAuth
          ?
          <Switch>
            <Route exact path ='/login'  component =  {Login}/>
            <Route exact path ='/register' component = {Registration}/>
          </Switch>
          :
          <Switch>
              <Route exact path ='/board' render = {() =><Board/>}/>
          </Switch>
            
        }
        
 
          
     
      </div>

    </div>
  );
}

export default App;
