import React, { Component } from 'react';
import './App.css';

import Column from './components/Column'

class App extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        {
          col: 0,
          title: 'Apple',
          color: '#8E6E95',
          cards: ['Apple 1', 'Apple 2'],
        },
        {
          col: 1,
          title: 'Banana',
          color: '#39A59C',
          cards: ['Banana 1', 'Banana 2'],
        },
        {
          col: 2,
          title: 'Cherry',
          color: '#344759',
          cards: ['Cherry 1', 'Cherry 2'],
        },
        {
          col: 3,
          title: 'Dog',
          color: '#E8741E',
          cards: ['Dog 1', 'Dog 2'],
        },
      ],
    }
  }

  componentDidMount() {
    if (window.localStorage.getItem('columns')) {
      this.setState({
        columns: JSON.parse(window.localStorage.getItem('columns'))
      })
    }  
  }

  addCard(col) {
    const content = window.prompt();
    if (!content) return;
    let columns = this.state.columns;
    columns[col].cards.push(content);
    this.setState({columns});
    window.localStorage.setItem('columns', JSON.stringify(columns));
  }

  moveLeft(col, content) {
    let columns = this.state.columns;
    const idx = columns[col].cards.indexOf(content)
    columns[col].cards.splice(idx, 1);
    columns[col - 1].cards.push(content);
    this.setState({columns});
    window.localStorage.setItem('columns', JSON.stringify(columns));
  }

  moveRight(col, content) {
    let columns = this.state.columns;
    const idx = columns[col].cards.indexOf(content)
    columns[col].cards.splice(idx, 1);
    columns[col + 1].cards.push(content);
    this.setState({columns});
    window.localStorage.setItem('columns', JSON.stringify(columns));
  }

  render() {
    const { columns } = this.state;
    const columnList = columns.map((column, idx) => {
      return (
        <Column
          key={idx}
          col={column.col}
          title={column.title}
          color={column.color}
          cards={column.cards}
          addCard={this.addCard.bind(this)}
          moveLeft={this.moveLeft.bind(this)}
          moveRight={this.moveRight.bind(this)}
        />
      ); 
    })

    return (
      <div className='App'>
        {columnList}
      </div>
    );
  }
}

export default App;
