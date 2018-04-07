import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, Button, Grid, } from 'semantic-ui-react';

class Home extends Component {
  state = { card: {}, flipped: true }

  componentDidMount() {
    axios.get('/api/cards')
    .then(res => { this.setState({ cards: res.data })
    })
  }

  displayCard = () => {
    const { card } = this.state;
      return(
        <Card.Content key={card.id}>
          <Card.Description>
            { this.state.flipped? card.front : card.back }
          </Card.Description>
        </Card.Content>
      )
    }

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped })
  }

  newCard = () => {
    const num_list = [ 0, 1, 2, 3 ];
    const num = num_list[Math.floor(Math.random()*num_list.length + 1)];
    const { cards, card } = this.state;
    this.setState({ card: cards[0] })
    debugger
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row centered>
            <Card>
              { this.displayCard() }
            </Card>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <Button onClick={ () => this.flipCard()}>Flip</Button>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={ () => this.newCard()}>New</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Home;
