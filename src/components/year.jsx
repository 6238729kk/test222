import React, { Component } from 'react';

class Year extends Component {
    handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};
    render() {
        return (<>
            <button className='yearLabel'
            >{new Date().getFullYear()}년</button>
            <ul className='yearList'>
            {this.props.yearList.map((y) => (<li
            key ={`${y}`}
            className='yearItem'
            value={`${y}`}>{y}년</li>))}
            </ul>
            {/* <div className='SelectBoxWrapper '>
        <select 
        className='yearSelectBox'
        onChange={this.handleChange}>
			{this.props.yearList.map((year) => (
				<option
                key ={`${year}`}
				value={year}
				defaultValue={this.props.defaultValue === year.value}>
				{year}년
				</option>
			))}
		</select>
        			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="green"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
                    stroke="red"
					d="M10 14L16 6H4L10 14Z"
					fill="#1A1A1A"
				/>
			</svg>
            </div> */}
            </>
        );
    }
}

export default Year;