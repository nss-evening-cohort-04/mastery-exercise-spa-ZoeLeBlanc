var CarLot = (function (activateCars) {

activateCars.activateEvents = function(carClicks, inputSubmit) {
	
	for (var i = 0; i < carClicks.length; i++){
		var description = "";
		carClicks[i].addEventListener("click", function(event){	
			//Clear everything
			CarLot.resetStyles(carClicks);
			var clickedCar = "";
			
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
			
		
			inputSubmit.value = description.innerText;
			inputSubmit.focus();

		});
		inputSubmit.addEventListener("keyup", function(event){
			if(event.keyCode !== 13){
				description.innerText = inputSubmit.value;
			} else {
				inputSubmit.value="";
				description = "";
			}
		});	
	}
		
};

return activateCars

})(CarLot || {});