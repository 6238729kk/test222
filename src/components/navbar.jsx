import React, { Component } from 'react';
import Habitsss from './habitsss';

class Navbar extends Component {

    render() {
    // const {id, count} = this.props.sumhabit
        return (
    <nav className='navbar'>
    <i className='far fa-smile-wink'></i>
    <span>Habit Tracker
    </span>
    <span className='sum-count'>{this.props.totalCount}
    </span>
    </nav>
        );
    }
}

export default Navbar;

    // {/* <Habitsss
    // sumPlus = {this.plusFuc}
    // /> */
    // count ,  id}