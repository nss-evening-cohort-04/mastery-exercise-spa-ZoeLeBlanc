var CarLot = (function (activateCars) {

activateCars.activateEvents = function(carClicks, inputSubmit) {
	for (var i = 0; i < carClicks.length; i++){
		carClicks[i].addEventListener("click", function(event){
			var clickedCar = event.target.parentNode;
			var finalId;
			if (clickedCar.id){
				finalId = clickedCar.id;
			 } else {
				finalId = clickedCar.parentNode.id;
			 }
			document.getElementById(finalId).setAttribute("selected", "true");
			inputSubmit.value = "";
			var height = prompt("Enter a border height. Type thin, medium, or thick.");
			var color = prompt("Enter a color. Type blue, purple, red, yellow, etc...");
			CarLot.addStyles(finalId, height, color);
			var description = document.getElementById(finalId).querySelector("p");
			inputSubmit.value = description.innerHTML; 
			//fixed focus issue
			setTimeout(function(){inputSubmit.focus();}, 1);
			inputSubmit.addEventListener("keypress", function(event){
				if (document.getElementById(finalId).hasAttribute("selected")){
					if (event.keyCode !== 13) {
					description.innerHTML = inputSubmit.value;
					} else {
					inputSubmit.value = "";
					CarLot.resetStyles(finalId);
					document.getElementById(finalId).removeAttribute("selected", "false");
					}
				}
				
			});
		});
		
	}
}
return activateCars

})(CarLot || {});