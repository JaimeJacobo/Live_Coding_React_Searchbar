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

  addCountry =()=>{
    let newArray = [...this.state.countriesList]
    newArray.push(this.state.inputText)
    this.setState({
      countriesList: newArray
    })
  }

  searchAndDelete(thisCountry){
    let newArray = this.state.countriesList.filter((country)=>{
      return country !== thisCountry
    })

    this.setState({
      countriesList: newArray
    })

  }

  renderCountries(){

    let filteredArray = this.state.countriesList.filter((country)=>{
      return country.toLowerCase().includes(this.state.inputText.toLowerCase())
    })

    if(filteredArray.length === 0){
      return (
        <div>
          <p>No hay paises con este nombre. ¿Quieres añadirlo?</p>
          <button onClick={()=>this.addCountry()}>Añadir</button>          
        </div>
      )
    }

    //Hacemos un loop a los paises dentro del estado y metemos la info en Country
    let countries = filteredArray.map((country, index)=>{
      return (
        <div className="blue_color">
          <Country key={index} pais={country}/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png" alt="Cross" onClick={()=>this.searchAndDelete(country)}/>
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
