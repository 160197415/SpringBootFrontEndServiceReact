import React from 'react'
import './Component.css';

function StoreComponent() {
  return (
    <div className='storeContainer'>
    <div className='buttonPlacement'>
        <button id="displayButton" onClick={() =>loadAllStoresApi()}> A list of our outlet stores!!</button>
    
        </div>
        
  

   

        <div>
        
          
           <ol id="storeList" className='olList' >
           
               </ol>
               
        </div>

    </div>
  )
}

export default StoreComponent


// api
function loadAllStoresApi() {
  //let actorDiv = document.getElementById('clickToDisplay').click();
  
  let storeUl = document.getElementById('storeList');

  // var country = "";
  fetch('http://localhost:8080/All_Stores' ) // TODO: make sure to change this back
  
      .then(response => response.json())
      .then(store => {
        console.log(store);


          store.forEach(store => {
              //creating a new li
              // let country;
              let listStores = document.createElement('li')
              //get  values  from json string and set it to id and country
              // let customer_id = customer.customer_id
              let store_id = store.store_id
              let storeAddress_id = store.address_id;
              let storeManager_staff_id = store.manager_staff_id;
              let aCustomer = " -Store Id: " + store_id + " . " + " Address Id: "+ storeAddress_id + " , Store Manager Id's " + storeManager_staff_id;
              //adding item to the variable call listOfActors
              listStores.appendChild(document.createTextNode(aCustomer))
              // console.log(film);
              // adding the list variable to the film ul to display it
              storeUl.appendChild(listStores);

          });
      });
}
