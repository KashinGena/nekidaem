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

        }
    }      
}

export const createCard = (card, token) => {
    const config = {
        headers: { Authorization: `JWT ${token.token}` }
    };
    console.log(config);
    
    return async dispatch => {
        try {
            const response = await axios.post('https://trello.backend.tests.nekidaem.ru/api/v1/cards/',card,config)
            const data= response.data
            dispatch(cardCreated(data))
            
        }
        catch(e) {

        }
    }
}

const cardCreated = (card) => {
    console.log(card);
    
    return {
        type:'CARD_CREATED',
        payload:card
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