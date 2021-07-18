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

        default:
            return state
    }
}


export default authReducer