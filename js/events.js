var CarLot = (function (activateCars) {

activateCars.activateEvents = function(carClicks, inputSubmit) {
	
	for (var i = 0; i < carClicks.length; i++){
		var description = "";
		carClicks[i].addEventListener("click", function(event){	
			//Clear everything
			CarLot.resetStyles(carClicks);
			var clickedCar = "";
			var description = "";
			console.log("new description", description);
			inputSubmit.value = "";
			console.log("new inputSubmit", inputSubmit.value);
			//Get Styles
			clickedCar = event.target.parentNode;
			if (clickedCar.hasAttribute("id")){
				console.log("hi");
			} else {
				clickedCar = clickedCar.parentNode;
			}
			var color = "purple";
			CarLot.addStyles(clickedCar, color, "medium");
			//Get Input
			var descriptionParent = clickedCar.children[4];
			description = descriptionParent.children[0];
			inputSubmit.focus();
			inputSubmit.value = description.innerText;
			console.log("inputSubmit", inputSubmit.value);
			inputSubmit.addEventListener("input", function(event){
				// console.log(description.parentNode);
				// inputSubmit.value = description;
				description.innerText = inputSubmit.value;
				console.log("descriptionHTML", description);
			});	
		});
	}
		
};

return activateCars

})(CarLot || {});