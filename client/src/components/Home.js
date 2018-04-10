import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, Button, Grid, } from 'semantic-ui-react';

class Home extends Component {
  state = { card: {}, flipped: true }

  componentDidMount() {
    axios.get('/api/cards')
    .then(res => { this.setState({ cards: res.data })
    })
    setTimeout(() => {
      this.newCard()
    }, 100)
  }

  displayCard = () => {
    const { card } = this.state;
      return(
        <Card key={card.id} style={style.card}>
          <Card.Content>
            <Card.Description style={style.font}>
              { this.state.flipped? card.front : card.back }
            </Card.Description>
          </Card.Content>
        </Card>
      )
  }

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped })
  }

  newCard = () => {
    const { cards } = this.state;
    const num = cards[Math.floor(Math.random()*cards.length)];
    this.setState({ card: num, flipped: true })
  }

  render() {
    return (
      <Container style={style.pad}>
      {this.state.card?
        <Grid>
          <Grid.Row centered>
            {  this.displayCard() }
          </Grid.Row>
          <Grid.Row centered>
            <Button onClick={ () => this.flipCard() }>Flip</Button>
            <Button onClick={ () => this.newCard() }>Next</Button>
          </Grid.Row>
        </Grid>
        :
        <Grid>
          <Grid.Row centered>
            <Card style={style.card}>
              <Card.Content>
                <Card.Description style={style.nocard}>
                 Please Add A Card
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Row>
        </Grid>}
      </Container>
    )
  }
}

const style = {
  pad: {
    paddingTop: '50px',
  },
  card: {
    padding: '50px',
  },
  nocard: {
    fontSize: '20px',
  },
  font: {
    fontSize: '40px',
    textTransform: 'uppercase',
  }
}

export default Home;
