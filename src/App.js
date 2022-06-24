import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ActorComponent from './components/ActorComponent';
import CountryComponent from './components/CountryComponent';
import CustomerComponent from './components/CustomerComponent';
import FilmActorComponent from './components/FilmActorComponent';
import StoreComponent from './components/StoreComponent';

import './index.css';


var styles = {
  
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}







function App() {
  return (
    <div className="container">
     <h1><strong>Welcome to the Sakila Database</strong></h1>

     <p style={styles}><strong>A website for searching for your favourite actors and media they star in!
    </strong></p>

    <div className='componentContainer'>
    <ActorComponent />
    
    <p style={styles}><strong>We have a list of countries as well!
    </strong></p>
    <CountryComponent />


    <p style={styles}><strong>And a catalogue of loyal Customers!!
    </strong></p>
    <CustomerComponent />

    <p style={styles}><strong>Listing our index of films with their starring actors!!!
    </strong></p>
    <FilmActorComponent />

    <p style={styles}><strong>List of Stores to buy films and movies from!!
    </strong></p>

    <StoreComponent />

   
</div>
    <br />
   
    
  
 
  </div> 
   

  );
}

export default App;
