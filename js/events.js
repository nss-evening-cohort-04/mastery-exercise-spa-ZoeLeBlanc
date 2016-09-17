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
			var height = prompt("Enter a border height");
			var color = prompt("Select a color");
			console.log(finalId);
			CarLot.addStyles(finalId, height, color);
			var description = document.getElementById(finalId).querySelector("p");
			inputSubmit.value = description.innerHTML; 
			inputSubmit.focus();
			inputSubmit.addEventListener("keypress", function(event){
				if (document.getElementById(finalId).hasAttribute("selected")){
					if (event.keyCode !== 13) {
					description.innerHTML = inputSubmit.value;
					//console.log(description.innerHTML);
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