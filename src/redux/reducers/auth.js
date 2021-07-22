const initialState =  {
    isAuth:false,
    token:null,
    userName:'',
    error:null,
    expirationData:null
}


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_SUCCESS':

            return {
                ...state,
                token:action.token,
                userName:action.username,
                isAuth:true,
                error:null,
                

            }

        case 'AUTH_ERROR': 
            return {
                ...state, error:action.error
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false,
                token:null,
                userName:'',
                error:null
            }
        case 'AUTO_AUTH_SUCCESS':
            return {
                ...state,
                isAuth:true,
                token:action.token,
                userName:action.userName,
                error:null
               
            }
        case('TOKEN_REFRESHED'): {
            return {
                ...state,
                token:action.payload
            }
        }


        default:
            return state
    }
}


export default authReducer