import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Container, } from 'semantic-ui-react'
import { addCard, updateCard, getCards } from '../actions/cards';

class FlashcardForm extends React.Component {
  state = { front: '', back: '', chapter: '' }

  componentDidMount() {
      const { dispatch } = this.props;
      dispatch(getCards())
      // this.setState({ front: this.state.card.front, back: this.state.card.back, chapter: this.state.card.chapter })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params != prevProps.match.params) {
      this.setState({ front: '', back: '', chapter: '' })
    }
  }

  componentWillReceiveProps(prevProps) {
    this.setState({ card: prevProps.card.find( c => c.id == prevProps.match.params.id) })
  }

  rand = () => {
    this.setState({ front: this.state.card.front, back: this.state.card.back, chapter: this.state.card.chapter })
  }

  postCard = (e) => {
    e.preventDefault();
    const { dispatch, match } = this.props;
    const { front, back, chapter } = this.state;
    const func = match.params.id? updateCard : addCard;
    const id = match.params.id;
    let params = { front, back, chapter, id };
    dispatch(func(params))
    this.props.history.push('/')
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  render() {
    return(
      <Container style={style.pad}>
        <Form onSubmit={this.postCard}>
          <Form.Input
            name='front'
            value={this.state.front}
            label='Front'
            placeholder='Front'
            onChange={this.handleChange}
          />
          <Form.Input
            name='back'
            value={this.state.back}
            label='Back'
            placeholder='Back'
            onChange={this.handleChange}
          />
          <Form.Input
            name='chapter'
            value={this.state.chapter}
            label='Chapter'
            placeholder='Chapter'
            onChange={this.handleChange}
          />
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}

const style = {
  pad: {
    paddingTop: '50px',
    width: '50%',
  },
}

const mapStateToProps = (state) => {
  return { card: state.cards }
}

export default connect(mapStateToProps)(FlashcardForm);