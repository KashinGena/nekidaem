import axios from "axios";

export const logout = () => {
    localStorage.clear()
    return {
        type:'LOGOUT'
    }
}

export const authSuccess = (token, username) => {
    return {
        type:'AUTH_SUCCESS',
        token,
        username
    }
}

export const autoAuthSuccess = (token, userName) => {
    return {
        type:'AUTO_AUTH_SUCCESS',
        token,
        userName
    }
}

export const authFailed = (error) => {

    return {
        type:'AUTH_ERROR',
        error
    }
}

export const tokenRefreshed = (token) => {
    localStorage.removeItem('expData')
    localStorage.removeItem('token')
    const expirationData = new Date().getTime()*60*60*100
    localStorage.setItem('expData', JSON.stringify(expirationData))
    localStorage.setItem('token',token)
    return {
        type:'TOKEN_REFRESHED',
        payload:token
    }
}

export const auth = (authObj,isLogin) => {
    const url = (isLogin)?
        'https://trello.backend.tests.nekidaem.ru/api/v1/users/login/'
        :
        'https://trello.backend.tests.nekidaem.ru/api/v1/users/create/'
    const {username,password}=authObj
    const requestObj = (isLogin)? {username,password}:authObj
    console.log(requestObj);
    
    return async (dispatch) => { 
        try {
            const response = await axios.post(url,requestObj)
            console.log(response);
            
            if (response.status===201 || response.status===200) {
  
                const data = response.data
                console.log(data);
                
                const expirationData = new Date().getTime()*60*60*100
                localStorage.setItem('expData', JSON.stringify(expirationData))
                console.log(data.token);
                
                localStorage.setItem('token', data.token)
                localStorage.setItem('username', data.username)
                localStorage.setItem('password', data.password)
                dispatch(authSuccess(data.token,data.username))
                dispatch(refreshToken(3600))
              
            } 
            else {
                dispatch(logout())   
            } 
        }
        catch (e) {
           dispatch(authFailed(e.response.data))
    }
}
}


export const autoAuth = () => {
    const url = 'https://trello.backend.tests.nekidaem.ru/api/v1/users/login/'

    const userName= localStorage.getItem('username')
    const password = localStorage.getItem('password')
    const token = localStorage.getItem('token')
    const expData = new Date(JSON.parse(localStorage.getItem('expData')))
   
    const requestObj = (userName && password) && {'username':userName,'password':password}
    return async (dispatch) => { 
        if (expData>new Date().getTime())
            dispatch(autoAuthSuccess(token,userName))
        try {
            const response =(requestObj)? await axios.post(url,requestObj):null
            if (response.status===200) {
               
                const data = response.data
                const userName=localStorage.getItem('username')
                dispatch(autoAuthSuccess(data.token,userName))
            } 
            else {
                dispatch(logout())   
            } 
        }
        catch (e) {
            dispatch(logout())   
        }
    }
}


export function refreshToken(time) {
    return  (dispatch,getState) => {
        const token = getState().authReducer.token
        const config = {
            headers: { Authorization: `JWT ${token}` }
        }
        console.log(config);
        
        
        setTimeout(() => {
           axios.post('https://trello.backend.tests.nekidaem.ru/api/v1/users/refresh_token/',token,config)
           .then(data => dispatch(tokenRefreshed(data)))
        },time*1000)
    }
}


