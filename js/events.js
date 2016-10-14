var CarLot = (function (activateCars) {

activateCars.activateEvents = function(carClicks, inputSubmit) {
	var clickedCar = "";
	for (var i = 0; i < carClicks.length; i++){
		
		carClicks[i].addEventListener("click", function(event){	
			clickedCar = event.currentTarget;
			console.log(clickedCar);
			CarLot.resetStyles(carClicks);
			var color = prompt("Enter a color. Type blue, purple, red, yellow, etc...");
			
			if (color === null){
				color = "purple";
			}
			//fixed focus issue
			
			CarLot.addStyles(clickedCar, color, "medium");
			var description = clickedCar.querySelector("p");
			inputSubmit.value = description.innerHTML;
				// inputSubmit.focus();
			setTimeout(function(){inputSubmit.focus();
			}, 1);
			inputSubmit.addEventListener("keypress", function(event){
				
					if (event.keyCode !== 13) {
						description.innerHTML = inputSubmit.value;
					} else {
						inputSubmit.value = "";
						CarLot.resetStyles(carClicks);
					}
			});		
		});
	}
		
}
return activateCars

})(CarLot || {});