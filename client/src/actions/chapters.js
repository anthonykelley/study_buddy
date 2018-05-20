import axios from 'axios'

export const getChapters = () => {
  return (dispatch) => {
    axios.get('/api/chapters')
      .then( res => dispatch({ type: 'CHAPTERS', chapters: res.data, headers: res.headers }) )
  }
}
