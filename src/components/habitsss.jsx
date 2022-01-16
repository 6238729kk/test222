import React, { Component } from 'react';
import Habit from './habit';

class Habitsss extends Component {

    plusFuc = (habitlist) => {
        this.props.onPlus(habitlist)
    }
    minusFuc = (habitlist) => {
        this.props.onMinus(habitlist)
    }
    delFuc = (habitlist) => {
        this.props.onDel(habitlist)
    }
    render() {
        return (
            <>
            <ul>
                {this.props.habitsss.map(onehabit => 
                <Habit habitlist = {onehabit}
                key={onehabit.id}
                onPlus={this.plusFuc}
                onMinus={this.minusFuc}
                onDel={this.delFuc}/>)}    
            </ul>
            </>
        );
    }
}

export default Habitsss;