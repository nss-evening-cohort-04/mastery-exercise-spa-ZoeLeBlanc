var carsOutput = document.getElementById("carlotArea");

function populatePage (inventoryList) {	
	currentCar = "";
	for (var counter = 0; counter < inventoryList.length; counter++) {
	  		if (counter % 3 === 0){
	  			currentCar += '<div class="row">';
	  		}
  			currentCar += '<div class="col-md-4">';
  				currentCar += '<div class="card" id=' +counter + '>';
		  			currentCar += '<div class="card-block">';
		  			currentCar += '<h4 class="card-title">Make: ' + inventoryList[counter].make +'</h4>';
		  			currentCar += '</div>';
		  			// currentCar += '<ul class="list-group list-group-flush">';
		  			currentCar += '<li class="list-group-item">Color: ' + inventoryList[counter].color + '</li>';
		  			currentCar += '<li class="list-group-item">Year: ' + inventoryList[counter].year + '</li>';
		  			currentCar += '<li class="list-group-item">Price: ' + inventoryList[counter].price + '</li>';
		  			// currentCar += '</ul>';
		  			currentCar += '<div class="card-block">';
		  				currentCar += '<p class="card-text">Description: ' + inventoryList[counter].description + '</p>';
		  			currentCar += '</div>';
  				currentCar += '</div>'; 
  			currentCar += '</div>';
	  		if ((counter-2) %3 === 0){
	  			currentCar += '</div>';
	  		}
		
			
	};
  	carsOutput.innerHTML = currentCar;
  // Now that the DOM is loaded, establish all the event listeners needed
  var cardsOutput = document.getElementsByClassName("card");
  var userInput = document.getElementById("user-input");
  CarLot.activateEvents(cardsOutput, userInput);
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();