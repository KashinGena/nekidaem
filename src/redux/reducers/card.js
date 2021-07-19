const initialState = {
    cards:[]
}


const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case('GET_CARDS_SUCCESS'): 
        console.log(action);
        
            return {
                ...state,
                cards:action.payload
            }
        case ('DELETE_CARD'): {
            
            const index = state.cards.findIndex(item => item.id===action.payload)
            
             const cloneCards= [...state.cards]
             cloneCards.splice(index,1)
          
             
            
            
            return {
                ...state,
                cards:cloneCards
            }
        }
        case ('CARD_CREATED'): 
        console.log(action.payload);
        
            return {
                ...state,
                cards: [...state.cards,action.payload]
            }
        default:
            return state;
    }
}

export default cardsReducer