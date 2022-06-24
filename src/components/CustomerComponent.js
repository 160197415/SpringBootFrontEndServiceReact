import React from 'react'
import './Component.css';

function CustomerComponent() {
  return (
    <div className='customerContainer'>
    <div className='buttonPlacement'>
        <button id="displayButton" onClick={() =>loadAllCustomersApi()}> List our loyal Customers</button>
    
        </div>
        
  

   

        <div>
        
          
           <ol id="customerNameList" className='olList' >
           
               </ol>
               
        </div>

    </div>
  )
}

export default CustomerComponent




// api
function loadAllCustomersApi() {
  //let actorDiv = document.getElementById('clickToDisplay').click();
  
  let customerUl = document.getElementById('customerNameList');

  // var country = "";
  fetch('http://localhost:8080/All_Customers' ) // TODO: make sure to change this back
  
      .then(response => response.json())
      .then(customer => {
        console.log(customer);


          customer.forEach(customer => {
              //creating a new li
              // let country;
              let listCustomers = document.createElement('li')
              //get  values  from json string and set it to id and country
              // let customer_id = customer.customer_id
              let store_id = customer.store_id
              let first_name = customer.first_name;
              let last_name =  customer.last_name;
              let email = customer.email;
              let address_id = customer.address_id;
              let aCustomer = "- Store Id: " + store_id + " . " + first_name + " , " + last_name + ", Email " + email + " , Address " + address_id ;
              //adding item to the variable call listOfActors
              listCustomers.appendChild(document.createTextNode(aCustomer))
              // console.log(film);
              // adding the list variable to the film ul to display it
              customerUl.appendChild(listCustomers);

          });
      });
}
