import React from 'react'
import './list.css';

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listOfStrings: [],
      indexCounter: 1,
      newString: "",
    }
    this.inputChange = this.inputChange.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this)
  }


  inputChange(e){
    return this.setState({newString: e.target.value});
  }

  addToList(){
   this.setState(prev => {
      return {listOfStrings: [...prev.listOfStrings, {index: this.state.indexCounter, string: this.state.newString}],
        indexCounter: this.state.indexCounter + 1,
        newString: "",}
    })
  }

  removeFromList(e){
    this.state.listOfStrings.map((string, index) => {
      this.setState({listOfStrings: this.state.listOfStrings.filter(string => {
              return string.index !== e;
        })
      })
    })
  }



  render(){
    const list = this.state.listOfStrings.map(obj => {
      return <li key={obj.index}><p>{obj.string}</p><button onClick={()=>{this.removeFromList(obj.index)}}>✖</button></li>
    })
    return (<div id="list">
      <input onChange={this.inputChange} value={this.state.newString} placeholder="Add new item"/>
      <button onClick={this.addToList}>Add</button>
      <ul>{list}</ul>
      </div>)
  }
}


export default List;
