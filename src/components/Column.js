import React from 'react'
import './../App.css';

import Card from './Card'

export default class Column extends React.Component {
  onClickAdd() {
    const col = this.props.col;
    this.props.addCard(col);  
  }

  render() {
    const { col, title, color, cards, moveLeft, moveRight } = this.props;
    const hasLeft = (col === 0) ? false : true;
    const hasRight = (col === 3) ? false : true;
    const cardList = cards.map((card, idx) => {
      return (
        <Card
          key={idx}
          col={col}
          content={card}
          hasLeft={hasLeft}
          hasRight={hasRight}
          moveLeft={moveLeft}
          moveRight={moveRight}
        /> 
      );
    })
    return (
      <div className='col'>
        <div className='title' style={{backgroundColor:color}}>{title}</div>
        {cardList}
        <div className='add' onClick={this.onClickAdd.bind(this)}>+ Add a card</div>
      </div>
    );
  }
}