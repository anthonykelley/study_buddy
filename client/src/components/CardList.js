import React from 'react';
import { getCards } from '../actions/cards';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Table, } from 'semantic-ui-react';

class CardList extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCards())
  }

  displayTable = () => {
    return this.props.cards.map( c => {
      return(
        <Table.Row key={c.id}>
          <Table.Cell>{c.front}</Table.Cell>
          <Table.Cell>{c.back}</Table.Cell>
          <Table.Cell>{c.chapter}</Table.Cell>
          <Table.Cell>
            <Link to={`/new_card/${c.id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  render() {
    return(
      <Container style={styles.pad}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Front</Table.HeaderCell>
              <Table.HeaderCell>Back</Table.HeaderCell>
              <Table.HeaderCell>Chapter</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.displayTable()}
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

const styles = {
  pad: {
    paddingTop: '50px',
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards }
}

export default connect(mapStateToProps)(CardList);