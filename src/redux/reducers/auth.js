const initialState =  {
    isAuth:false,
    token:null,
    userName:'',
    error:null
}


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_SUCCESS':

            return {
                ...state,
                token:action.token,
                userName:action.username,
                isAuth:true,
                error:null
            }
        case 'AUTH_ERROR': 
        console.log(action.payload);
        
            return {
                ...state, error:action.error
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false,
                token:'',
                userName:''
            }
        case 'AUTO_AUTH_SUCCESS':
            return {
                ...state,
                isAuth:true,
                token:action.token,
                userName:action.userName,
                password:action.password
            }


        default:
            return state
    }
}


export default authReducer