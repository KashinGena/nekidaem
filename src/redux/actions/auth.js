
import axios from "axios";


export const authSuccess = (token, username) => {
    return {
        type:'AUTH_SUCCESS',
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
            if (response.status===201) {
                console.log(response);
                
                const data = response.data
                dispatch(authSuccess(data.token,data.username))
              
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


