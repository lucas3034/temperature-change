import React, {Component} from 'react';
import {render} from 'react-dom';
import Button from './components';


const titulo1 = ''
const titulo2 = 'FAHRENHEIT TO CELSIUS'




class App extends Component{
  
  state = {
    celsius: 0,
    fahrenheit: 0,
    toCelsius: 0,
    toFahrenheit: 0,
}

adicionarCelsius = () => {
this.setState({
  celsius: this.state.celsius+1,
  
});
}
subtrairCelsius = () => {
  this.setState({
    celsius: this.state.celsius-1,
    
  });
  }
adicionarFahrenheit = () => {
this.setState({
  fahrenheit: this.state.fahrenheit+1,
  
});
}
subtrairFahrenheit = () => {
  this.setState({
    fahrenheit: this.state.fahrenheit-1,
    
  });
  }
 
render(){
  
  return (
    
    
    <>
    
    CELSIUS TO FAHRENHEIT:
    <br />
    
    <div>

      
      
        celsius: {this.state.celsius} to Fahrenheit: {this.state.celsius*1.8 + 32}
        <br />
        <Button press={this.adicionarCelsius}>
          +1° Celsius
        </Button>
        <Button press={this.subtrairCelsius}>
          -1° Celsius
        </Button>

        <hr />
        
        
    
    FAHRENHEIT TO CELSIUS:
    <br />

        fahrenheit: {this.state.fahrenheit} to Celsius: {(this.state.fahrenheit-32) /1.8}
        <br />
        <Button press={this.adicionarFahrenheit}>
          +1° Fahrenheit
        </Button>
        <Button press={this.subtrairFahrenheit}>
          -1° Fahrenheit
        </Button>
        
      </div></>
  
  );
  }
}

render(<App />, document.getElementById('root'));
