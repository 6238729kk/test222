
import './app.css';
import Habitsss from './components/habitsss';
import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habitsss:[
    {id: 1, name:'Playing', count:0},
    {id: 2, name:'Sleeping', count:0},
    {id: 3, name:'Watching', count:0}],
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
  habits[index].count = count < 0 ? 0 : count  
  
  this.setState({ habitsss : habits}) 
}
delFuc = (habitlist) => {
  
  const habits = this.state.habitsss.filter(item => item.id !== habitlist.id)
  this.setState({ habitsss : habits}) 
}
  render() {
    return (
    <>
    <Navbar totalCount = {this.state.habitsss.filter(i => i.count > 0).length}/>
    <Habitsss
    habitsss = {this.state.habitsss}
    onPlus={this.plusFuc}
    onMinus={this.minusFuc}
    onDel={this.delFuc}/>
    </>      
    );
  }
}

export default App;
// function App() {
//   return (
// <Habitsss/>
//   );
// }


