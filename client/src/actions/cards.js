import axios from "axios";

export const getCards = () => {
  return (dispatch) => {
    axios.get('/api/cards')
    .then( res => dispatch({ type: 'CARDS', cards: res.data, headers: res.headers}) )
  }
}

export const addCard = (card) => {
  return (dispatch) => {
    axios.post('/api/cards', card)
    .then( res => dispatch({ type: 'ADD_CARD', card: res.data, headers: res.headers }) )
  }
}

export const updateCard = (card) => {
  return (dispatch) => {
    axios.put(`/api/cards/${card.id}`, card)
    .then( res => dispatch({ type: 'UPDATE_CARD', card: res.data, headers: res.headers }) )
  }
}