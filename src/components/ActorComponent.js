import React from 'react'
import './Component.css';


function ActorComponent() {
  return (
    <div className='actorContainer'>
    <div className='buttonPlacement'>
        <button id="displayButton" onClick={() =>loadAllActorsApi()}> Show All Stored Actors</button>
        &nbsp;&nbsp;  
        <button id="findActorByIdButton" onClick={() => getActorById()}> Search for Actor by Id</button>
        </div>
        <br />
  
    <input id="inputAreaId" cols="30" rows="1" placeholder="Search Actor By Id">

      
    </input>
   

        <div>
        <br />
          <div id='actorIdSearched'></div>
          <div id='actorNameSearched'></div>
           <ol id="actorNameList" className='olList'>
           
               </ol>
               
        </div>

    </div>
  )
}



export default ActorComponent


// api
function loadAllActorsApi() {
  //let actorDiv = document.getElementById('clickToDisplay').click();
  let actorUl = document.getElementById('actorNameList');


  fetch('http://localhost:8080/All_Actors' ) // TODO: make sure to change this back
      .then(response => response.json())
      .then(actor => {
        console.log(actor);

          actor.forEach(actor => {
              //creating a new li
              let listActors = document.createElement('li')
              //get  first name from json string and set it to title
              let first_name = actor.first_name
              let last_name = actor.last_name
              let actorName = first_name + " " + last_name;
              //adding item to the variable call listOfActors
              listActors.appendChild(document.createTextNode(actorName))
              // console.log(film);
              // adding the list variable to the film ul to display it
              actorUl.appendChild(listActors);

          });
      });
}


// api
function getActorById() {
  //let actorDiv = document.getElementById('clickToDisplay').click();
  let id = document.getElementById("inputAreaId").value;
  console.log(id);

  fetch('http://localhost:8080/Get_By_ID?actor_id='+id ) // TODO: make sure to change this back
      .then(response => response.json())
      .then(actor => {
        console.log(actor);

              //creating a new li
              // let listActors = document.createElement('li')
              //get  first name from json string and set it to title
              let first_name = actor.first_name
              let last_name = actor.last_name
              let actorName = first_name + " " + last_name;
              //adding item to the variable call listOfActors
              document.getElementById("actorIdSearched").innerHTML = actorName;
              document.getElementById("actorNameList").innerHTML = "";
           
          });
      
}

