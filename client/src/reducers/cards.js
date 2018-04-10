const cards = (state = [], action) => {
  switch (action.type) {
    case 'CARDS':
      return action.cards;
    case 'ADD_CARD':
      return [action.card, ...state];
    default:
      return state;
  }
}

export default cards;