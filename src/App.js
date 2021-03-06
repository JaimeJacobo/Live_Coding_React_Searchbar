import React, {Component} from 'react';
import Country from './Country'
import './App.css';

//Ponemos App como un class component porque queremos acceder al estado
class App extends Component {

  state = {
    countriesList: ['Francia', 'Chile', 'China', 'Australia', 'Guinea', 'Nigeria', 'Portugal', 'Alemania', 'Brasil', 'Andorra'],
    inputText: ''
  }

  async changeInputText(info){
    await this.setState({
      inputText: info
    })
  }

  renderCountries(){

    let filteredArray = this.state.countriesList.filter((country)=>{
      return country.toLowerCase().includes(this.state.inputText.toLowerCase())
    })

    //Hacemos un loop a los paises dentro del estado y metemos la info en Country
    let countries = filteredArray.map((country, index)=>{
      return (
        <div className="blue_color">
          <Country key={index} pais={country}/>
        </div>
      )
        
    })
    return countries;
  }

  render(){
    return (
      <div className="App">
        <input onChange={(event)=>this.changeInputText(event.target.value)} type="text"/>
        {this.renderCountries()}
      </div>
    );    
  }
}

export default App;
