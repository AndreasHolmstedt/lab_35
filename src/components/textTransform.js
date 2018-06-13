import React from 'react';
import './textTransform.css';

class TextTransform extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: "",
            reversed: "",
            capitalized: "",
            squared: "",
        }
    }

    handleInput = (e) => {
        this.setState({ value: e.target.value }, () => this.handleTransforms());
    }

    handleTransforms = () => {
        this.handleReverseInput();
        this.handleCapitalizeInput();
        this.handleSquareInput();
    }

    handleReverseInput = () => {
        this.setState({ reversed: this.state.value.split("").reverse().join("")});
    }

    handleCapitalizeInput = () => {
        this.setState({ capitalized: this.state.value.toUpperCase()});
    }

    handleSquareInput = () => {
        if(!(Number(this.state.value) !== Number(this.state.value))) {
            // Number(this.state.value) is a number
            this.setState({ squared: this.state.value * this.state.value });
        }
    }


    render() {
        return (<div className="TextTransform">
                    <h2>Text Transform</h2>
                    <input type="text" value={this.state.value} onChange={this.handleInput} />
                    <p className="inputReversed">{this.state.reversed}</p>
                    <p className="inputCapitalized">{this.state.capitalized}</p>
                    <p className="inputSquared">{this.state.squared}</p>
                </div>);
    }
}


export default TextTransform;
