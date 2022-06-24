import React from 'react'
import './Component.css';

function CountryComponent() {
  return (
      <div className='countryContainer'>
      <div className='buttonPlacement'>
          <button id="displayButton" onClick={() =>loadAllCountriesApi()}> Show All Stored Countries</button>
      
          </div>
          
    
  
     
  
          <div>
          
            <div id='countryIdSearched'></div>
            <div id='countryNameSearched'></div>
             <ol id="countryNameList" className='olList' >
             
                 </ol>
                 
          </div>
  
      </div>
    )
  }
  
  

export default CountryComponent



// api
function loadAllCountriesApi() {
  //let actorDiv = document.getElementById('clickToDisplay').click();
  
  let countryUl = document.getElementById('countryNameList');

  // var country = "";
  fetch('http://localhost:8080/All_Countries' ) // TODO: make sure to change this back
  
      .then(response => response.json())
      .then(country => {
        console.log(country);


          country.forEach(country => {
              //creating a new li
              // let country;
              let listCountries = document.createElement('li')
              //get  values  from json string and set it to id and country
              // let countryID = country.countryID
              let countryName = country.country
              let countryDetail = countryName;
              //adding item to the variable call listOfActors
              listCountries.appendChild(document.createTextNode(countryDetail))
              // console.log(film);
              // adding the list variable to the film ul to display it
              countryUl.appendChild(listCountries);

          });
      });
}
