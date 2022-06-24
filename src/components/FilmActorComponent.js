import React from 'react'
import './Component.css';

function FilmActorComponent() {
  return (
    <div className='filmActorContainer'>
    <div className='buttonPlacement'>
        <button id="displayButton" onClick={() =>loadAllFilmActorsApi()}> Click to browse list!</button>
    
        </div>
        
  

   

        <div>
        
          
           <ol id="filmActorList" className='olList' >
           
               </ol>
               
        </div>

    </div>
  )
}

export default FilmActorComponent



// api
function loadAllFilmActorsApi() {
  //let actorDiv = document.getElementById('clickToDisplay').click();
  
  let filmActorUl = document.getElementById('filmActorList');

  // var country = "";
  fetch('http://localhost:8080/All_FilmActors' ) // TODO: make sure to change this back
  
      .then(response => response.json())
      .then(filmActor => {
        console.log(filmActor);


          filmActor.forEach(filmActor => {
              //creating a new li
              // let country;
              let listFilmActors = document.createElement('li')
              //get  values  from json string and set it to id and country
              // let customer_id = customer.customer_id
              let actor_id = filmActor.actor_id;
              let film_id = filmActor.film_id  
              let starFilm = "actor Id: " + actor_id + " And the starring Film" + film_id ;
              //adding item to the variable call listOfActors
              listFilmActors.appendChild(document.createTextNode(starFilm))
              // console.log(film);
              // adding the list variable to the film ul to display it
              filmActorUl.appendChild(listFilmActors);

          });
      });
}
