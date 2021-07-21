import axios from "axios"

export const getCards = (token) => {
    const config = {
        headers: { Authorization: `JWT ${token.token}` }
    };  
    return async dispatch => {
        try {
            const response = await axios.get('https://trello.backend.tests.nekidaem.ru/api/v1/cards/',config)
            const data= response.data
            dispatch(getCardsSuccess(data))
        }
        catch(e) {
            alert(e)
        }
    }      
}

export const createCard = (card, token) => {
    const config = {
        headers: { Authorization: `JWT ${token.token}` }
    };

    
    return async dispatch => {
        try {
            const response = await axios.post('https://trello.backend.tests.nekidaem.ru/api/v1/cards/',card,config)
            const data= response.data
            dispatch(cardCreated(data))         
        }
        catch(e) {
            alert(e)
        }
    }
}

const cardCreated = (card) => {

    
    return {
        type:'CARD_CREATED',
        payload:card
    }
}
export const update  = (id,destination,token) => {
    const config = {
        headers: { Authorization: `JWT ${token.token}` }
    };

    return  (dispatch,getState) => {
        
         const card =getState().cardsReducer.cards[id]
      
        
        const reqObj = {
           'row':destination.droppableId,
           'seq_num':destination.index,
           'text':card.text
        }
        
        try {
               
             axios.patch(`https://trello.backend.tests.nekidaem.ru/api/v1/cards/${id}/`,reqObj,config)
            
        }
        catch(e) {
            console.log(e);
            
        }
    }
}




 export const updateCardSuccess = (id,source,destination) => {
 
     
    return {
        type:'UPDATE_CARD',
        id,
        source,
        destination
    }
}

const getCardsSuccess = (cards) => {
    return {
        type:'GET_CARDS_SUCCESS',
        payload:cards
    }
}

const cardDeleted = (id) => {
    return {
        type:'DELETE_CARD',
        payload:id
    }
}


export const deleteCards = (id,token) => {
    const config = {
        headers: { Authorization: `JWT ${token.token}` }
    };  
    return async dispatch => {
        try {
             await axios.delete(`https://trello.backend.tests.nekidaem.ru/api/v1/cards/${id}/`,config)
             dispatch(cardDeleted(id))
        }
        catch(e) {

        }
    }      
}