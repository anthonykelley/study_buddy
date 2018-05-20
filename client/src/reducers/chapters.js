const chapters = (state = [], action) => {
  switch (action.type) {
    case 'CHAPTERS':
      return action.chapters;
    default:
      return state;
  }
}

export default chapters;
