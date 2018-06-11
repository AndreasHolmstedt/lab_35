import React from 'react'
import './counter.css';

class Counter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: 0,
            input: ""
        }
    }

    handleInput = (e) => {
        this.setState({ input: e.target.value });
        
        // if Number(e.target.value) is NaN, it will not equal Number(e.target.value) cus Nan !==  NaN.
        if(!(Number(e.target.value) !== Number(e.target.value))) {
            // Number(e.target.value) is a number
            this.setState({ value: Number(e.target.value) });
        }
    }

    handleIncrease = () => {
        this.setState({ value: this.state.value + 1 });
    }

    handleDecrease = () => {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return (<div className="Counter">
                    <input type="text" value={this.state.input} onChange={this.handleInput} />
                    <button onClick={this.handleIncrease} >+</button>
                    <button onClick={this.handleDecrease} >-</button>
                    <p>{this.state.value}</p>
                </div>);
    }
}


export default Counter;
