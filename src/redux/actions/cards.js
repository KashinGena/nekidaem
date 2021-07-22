import axios from "axios"

export const getCards = () => {

    return async (dispatch,getState) => {
        const token = getState().authReducer.token
        const expData = new Date(JSON.parse(localStorage.getItem('expData')))
        const config = {
            headers: { Authorization: `JWT ${token}` }
        };
        if (expData>new Date().getTime())
            dispatch(getCardsSuccess())
        try {
            console.log(config);
            
            const response = await axios.get('https://trello.backend.tests.nekidaem.ru/api/v1/cards/',config)
            const data= response.data
            console.log(data);
            
            dispatch(getCardsSuccess(data))
        }
        catch(e) {
            alert(e)
        }
    }      
}

export const createCard = (card) => {

    return async (dispatch,getState) => {
        const token = getState().authReducer.token
        const config = {
            headers: { Authorization: `JWT ${token}` }
        };
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


export const update  = (id,destination) => {

    return  (dispatch,getState) => {
        const token = getState().authReducer.token
        console.log(token);
        
        const config = {
            headers: { Authorization: `JWT ${token}` }
        };
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


export const deleteCards = (id) => {
  
    return async (dispatch,getState) => {
        const token = getState().authReducer.token
        console.log(token);
        
        const config = {
            headers: { Authorization: `JWT ${token}` }
        };
        try {
             await axios.delete(`https://trello.backend.tests.nekidaem.ru/api/v1/cards/${id}/`,config)
             dispatch(cardDeleted(id))
        }
        catch(e) {

        }
    }      
}