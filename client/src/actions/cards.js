import axios from "axios";

export const getCards = () => {
  return (dispatch) => {
    axios.get('/api/cards')
      .then( res => dispatch({ type: 'CARDS', cards: res.data, headers: res.headers}) )
  }
}