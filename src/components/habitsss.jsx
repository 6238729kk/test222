import React, { Component } from 'react';
import Habit from './habit';

class Habitsss extends Component {
    state = {
        habitsss:[
        {name:'Playing', count:0},
        {name:'Sleeping', count:0},
        {name:'Watching', count:0}]
    }
    plusFuc = (habitlist) => {
        const habits = [...this.state.habitsss]
        const index = habits.indexOf(habitlist)
        habits[index].count++
        this.setState({ habitsss : habits}) 
    }
    minusFuc = (habitlist) => {
        const habits = [...this.state.habitsss]
        const index = habits.indexOf(habitlist)
        const count = habits[index].count-1
        habits[index].count = count < 0 ? 0 : count   //나중에 수정
        
        this.setState({ habitsss : habits}) 
    }
    delFuc = (habitlist) => {
        
    }
    render() {
        return (
            <ul>
                {this.state.habitsss.map(onehabit => 
                <Habit habitlist = {onehabit}
                onPlus={this.plusFuc}
                onMinus={this.minusFuc}
                onDel={this.delFuc}/>)}    
            </ul>
        );
    }
}

export default Habitsss;