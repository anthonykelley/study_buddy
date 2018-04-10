const cards = (state = [], action) => {
  switch (action.type) {
    case 'CARDS':
      return action.cards;
    case 'ADD_CARD':
      return [action.card, ...state];
    case 'UPDATE_CARD':
      return state.map( c => {
        if (c.id === action.card.id)
          return action.card;
        return c;
      })
    default:
      return state;
  }
}

export default cards;