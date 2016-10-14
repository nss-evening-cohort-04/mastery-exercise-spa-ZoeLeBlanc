var CarLot = (function (styleCars) {

styleCars.addStyles = function(cardId, cardColor, cardBorder) {
	
	document.getElementById(cardId.id).style.backgroundColor = cardColor;
	document.getElementById(cardId.id).style.backgroundColor = cardBorder;
	
};
styleCars.resetStyles = function(cardDiv){
	for (var i = 0; i < cardDiv.length; i++){

		document.getElementById(cardDiv[i].id).style.borderWidth = "";
	document.getElementById(cardDiv[i].id).style.backgroundColor = "";
	}
	
	
}
return styleCars

})(CarLot || {});