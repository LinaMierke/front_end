import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./App.css"

class App extends Component {

  constructor() {
    super();
    this.state = {
      countries: []
    }
  }
  componentDidMount() {

    let url = "https://linacountries.herokuapp.com";
    fetch(url)
      .then(data => data.json())
      .then(countries =>
        this.setState({ countries: countries })
      )
  }


  render() {

    return (

      <div className="app">

        <h1> Hello There!!! </h1>
        {
         
          this.state.countries.map((country,i) => 

            <div key={i}> HI {country.capital}</div>
            
          )
          
        }



      </div>
    )

  }

}


export default App;



