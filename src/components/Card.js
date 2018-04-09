import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/lib/fa'
import './../App.css';

export default class Card extends React.Component {
  onClickLeft() {
    const col = this.props.col
    const content = this.props.content;
    this.props.moveLeft(col, content);
  }

  onClickRight() {
    const col = this.props.col
    const content = this.props.content;
    this.props.moveRight(col, content);
  }

  render() {
    const { content, hasLeft, hasRight } = this.props;
    return (
      <div className='card'>
        { 
          hasLeft && <div className='left'>
            <FaAngleLeft onClick={this.onClickLeft.bind(this)} />
          </div>
        }
        <div className='content'>{content}</div>
        { 
          hasRight && <div className='right'>
            <FaAngleRight onClick={this.onClickRight.bind(this)} />
          </div>
        }
      </div>
    );
  }
}