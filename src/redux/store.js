import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import authReducer from './reducers/auth'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    authReducer
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))


export default store