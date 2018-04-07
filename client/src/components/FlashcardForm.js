import React from 'react';
import axios from 'axios';
import { Form, Button, Container, } from 'semantic-ui-react'

class FlashcardForm extends React.Component {
  state = { front: '', back: '', chapter: '' }

  postCard = () => {
    const { front, back, chapter } = this.state;
    let params = { front, back, chapter }
    axios.post('/api/cards', params)
    .then( res => {
      this.props.history.push('/')
    })
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  render() {
    return(
      <Container>
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
        <Button onClick={this.postCard}>Submit</Button>
      </Container>
    )
  }
}

export default FlashcardForm;
