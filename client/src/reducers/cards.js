const cards = (state = [], action) => {
  switch (action.type) {
    case 'CARDS':
      return action.cards;
    default:
      return state;
  }
}

export default cards;