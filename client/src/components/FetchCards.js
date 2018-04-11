// import React from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
// import FlashcardForm from './FlashcardForm';
// import { getCards } from '../actions/cards';

// class FetchCards extends React.Component {

//   componentDidMount() {
//     const { dispatch } = this.props;
//     dispatch(getCards())
//   }

//   render() {
//     return (
//       <div>
//         <Route exact path='/new_card/:id' component={FlashcardForm} />
//       </div>
//     )
//   }
// }

// export default connect()(FetchCards);