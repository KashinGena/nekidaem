import React from 'react'
import './styles/App.scss';
import Registration from './pages/Authorization/Registration';
import Header from './components/Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
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
},[])

const onLogoutHandler = () => {
  dispatch(logout())
}
  
  return (
    <div className="app">

      <Header isAuth={isAuth} userName={userName} onLogout={onLogoutHandler}/>
      <Switch>
      <Route path ='/login'>
          {isAuth? <Redirect to='/'/> :<Login/>}
        </Route>
        <Route exact path = "/">
        {!isAuth? <Redirect to='/register'/> :<Board/>}
        </Route>
      
        <Route path ='/register'>
          {isAuth? <Redirect to='/'/> :<Registration/>}
        </Route>
        <Redirect to ='/'/>
      </Switch>
    </div>
  );
}

export default App;
