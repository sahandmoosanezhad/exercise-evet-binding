import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    

    this.handleclick2 = this.handleclick1.bind(this);
  }

  handleclick1() {
    console.log('Button 1 clicked');
  }

  handleclick3 = () => {
    console.log('Button 3 clicked');
  }

  render(){
    return(
      <div>
        <button onClick={this.handleclick1()}>click 1</button>
        <button onClick={this.handleclick1}>click 2</button>
        <button onClick={this.handleclick2}>click 3</button>
        <button onClick={this.handleclick3}>click 4</button>
      </div>
    );
  }
}

export default App;
