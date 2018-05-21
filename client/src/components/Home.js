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
    }, 200)
  }

  displayCard = () => {
    const { card } = this.state;
    return(
      <Card style={style.card} onClick={ () => this.flipCard() }>
        <Card.Content>
          <Card.Description style={style.font} textAlign='center'>
            { this.state.card.front ? ( this.state.flipped? card.front : card.back ) : 'Please Add A Card' }
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

  clearFilter = () => {
    this.setState({ num: 0 })
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container style={style.pad}>
        <div style={style.test}>
          <Form.Input
            name='num'
            value={this.state.num}
            onChange={this.handleChange}
            options={this.props.chapters}
            control={Select}
            search
            placeholder='Select Chapter...'
            onClose={this.filterChapter}
          />
          <Button onClick={ () => this.clearFilter() }>Clear Filter</Button>
        </div>
        <div>
          {  this.displayCard() }
        </div>
        <div>
          <Button onClick={ () => this.newCard() }>Next Card</Button>
        </div>
      </Container>
    )
  }
}

const style = {
  pad: {
    display: 'grid',
    gridTemplateRows: 'repeat(auto-fill, 100px)',
    paddingTop: '50px',
    gridGap: '20px',
    justifyItems: 'center',
  },
  test: {
    display: 'grid',
  },
  card: {
    justifyItems: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
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
