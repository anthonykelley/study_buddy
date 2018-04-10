import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Form, Button, Container, } from 'semantic-ui-react'
import { addCard, updateCard, showCard } from '../actions/cards';

class FlashcardForm extends React.Component {
  state = { front: '', back: '', chapter: '' }

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(showCard(match.params.id))
    setTimeout(() => {
      const { card } = this.props;
      this.setState({ front: card.front, back: card.back, chapter: card.chapter })
    }, 100)
  }

  postCard = () => {
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
        <Form>
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
        </Form>
        <Button onClick={this.postCard} style={style.button}>Submit</Button>
      </Container>
    )
  }
}

const style = {
  pad: {
    paddingTop: '50px',
    width: '50%',
  },
  button: {
    marginTop: '15px',
  }
}

const mapStateToProps = (state) => {
  return { card: state.cards }
}

export default connect(mapStateToProps)(FlashcardForm);