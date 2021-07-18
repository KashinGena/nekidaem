
import './styles/App.scss';
import Column from './components/Column/Column'
import Registration from './pages/Authorization/Registration';
import Header from './components/Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Board from './pages/Board/Board';
import {useSelector} from 'react-redux'
import Login from './pages/Authorization/Login';


 
function App() {
  const isAuth = useSelector ( state => state.authReducer.isAuth)
  

  
  return (
    <div className="app">

      <Header isAuth={isAuth}/>
      <Switch>
        <Route exact path = "/">
          {!isAuth? <Redirect to='/register'/> : <Board/>}
        </Route>
        <Route path ='/login'>
          {isAuth? <Redirect to='/'/> :<Login isAuth={isAuth}/>}
        </Route>
        <Route path ='/register'>
          {isAuth? <Redirect to='/'/> :<Registration isAuth={isAuth}/>}
        </Route>
        <Redirect to ='/'/>
      </Switch>


  
    </div>
  );
}

export default App;
