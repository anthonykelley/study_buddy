import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card, Button, Grid, Dropdown, Form, Select, } from 'semantic-ui-react';
import { getCards } from '../actions/cards';
import { getChapters } from '../actions/chapters';

class Home extends Component {
  state = { card: {}, flipped: true, num: 0, filter: [], }

  componentDidMount() {
    this.props.dispatch(getCards())
    this.props.dispatch(getChapters())
    setTimeout(() => {
      this.newCard()
    }, 500)
  }

  displayCard = () => {
    const { card } = this.state;
    return(
      <Card style={style.card} onClick={ () => this.flipCard() }>
        <Card.Content>
          <Card.Description style={style.font} textAlign='center'>
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
    const { cards } = this.props;
    const { filter } = this.state;
    const num = cards[Math.floor(Math.random()*cards.length)];
    const numFilter = filter[Math.floor(Math.random()*filter.length)];
    if ( this.state.num === 0 ) {
      this.setState({ card: num, flipped: true })
    }else {
      this.setState({ card: numFilter, flipped: true })
    }
  }

  filterChapter = () => {
    this.setState({ filter: this.props.cards.filter( c => c.chapter == this.state.num ) })
    setTimeout(() => {
      this.newCard()
    }, 200)
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container style={style.pad}>
        {this.state.card?
        <Grid>
          <Grid.Row>
            <Form.Input
              fluid
              name='num'
              value={this.state.num}
              onChange={this.handleChange}
              options={this.props.chapters}
              control={Select}
              search
              placeholder='Select Chapter...'
              onClose={this.filterChapter}
            />
          </Grid.Row>
          <Grid.Row centered>
            {  this.displayCard() }
          </Grid.Row>
          <Grid.Row centered>
            <Button onClick={ () => this.newCard() }>Next Card</Button>
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
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  nocard: {
    fontSize: '20px',
  },
  font: {
    fontSize: '40px',
    textTransform: 'uppercase',
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards, chapters: state.chapters }
}

export default connect(mapStateToProps)(Home);
