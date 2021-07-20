
import axios from "axios";


export const authSuccess = (token, username) => {
    return {
        type:'AUTH_SUCCESS',
        token,
        username
    }
}

export const autoAuthSuccess = (token, username) => {
    return {
        type:'AUTO_AUTH_SUCCESS',
        token,
        username
    }
}

export const authFailed = (error) => {

    return {
        type:'AUTH_ERROR',
        error
    }
}

export const auth = (authObj,isLogin) => {
    const url = (isLogin)?
        'https://trello.backend.tests.nekidaem.ru/api/v1/users/login/'
        :
        'https://trello.backend.tests.nekidaem.ru/api/v1/users/create/'

    const requestObj = (isLogin)? {...authObj.username,...authObj.password}:authObj

    return async (dispatch) => { 
        try {
            const response = await axios.post(url,requestObj)
            // console.log(response);
            
            if (response.status===201) {
                // console.log(response);
                
                const data = response.data
                localStorage.setItem('token', authObj.token)
                localStorage.setItem('username', authObj.username)
                localStorage.setItem('password', authObj.password)
                dispatch(authSuccess(data.token,data.username))
              
            } 
            else {
                // console.log(response.data);   
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
    const requestObj = (userName && password) && {'username':userName,'password':password}
    console.log(requestObj);
    

    return async (dispatch) => { 
        try {
            const response = await axios.post(url,requestObj)
            if (response.status===200) {
               
                const data = response.data
                dispatch(autoAuthSuccess(data))
              
            } 
            else {
                console.log(response.data);   
            } 
        }
        catch (e) {
           dispatch(authFailed(e.response.data))
    }
}
}



