import React, { Component } from 'react';

class Habit extends Component {
    plusFuc = (event) => {
        this.props.onPlus(this.props.habitlist)
    }
    minusFuc = () => {
        this.props.onMinus(this.props.habitlist)
    }
    delFuc = () => {
        this.props.onDel(this.props.habitlist)
    }
    render() {
       const {name, count} = this.props.habitlist; 
        return (
            <li className='habitList'>
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <span className="habit-name"></span>
            <button className="habit-button habit-inc"
            onClick={this.plusFuc}>
                <i className='fas fa-plus-square'></i>
            </button>
            <button className="habit-button habit-dec"
            onClick={this.minusFuc}>
                <i className='fas fa-minus-square'></i>
            </button>
            <button className="habit-button habit-del"
            onClick={this.delFuc}>
                <i className='fas fa-trash'></i>
            </button>
            </li>
        );
    }
}

export default Habit;