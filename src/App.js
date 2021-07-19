import React from 'react'
import './styles/App.scss';
import Registration from './pages/Authorization/Registration';
import Header from './components/Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Board from './pages/Board/Board';
import {useSelector, useDispatch} from 'react-redux'
import Login from './pages/Authorization/Login';
import { autoAuth } from './redux/actions/auth';


 
function App() {
  const isAuth = useSelector ( state => state.authReducer.isAuth)
  const dispatch = useDispatch()
  
React.useEffect(() => {
  if (!isAuth)
  
  dispatch(autoAuth())
})
  
  return (
    <div className="app">

      <Header isAuth={isAuth}/>
      <Switch>
        <Route exact path = "/">
          <Board/>
        </Route>
        <Route path ='/login'>
          {isAuth? <Redirect to='/'/> :<Login/>}
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
