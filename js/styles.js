var CarLot = (function (styleCars) {

styleCars.addStyles = function(cardId, cardBorder, cardColor) {
	document.getElementById(cardId).style.borderWidth = cardBorder;
	document.getElementById(cardId).style.backgroundColor = cardColor;
	
};
styleCars.resetStyles = function(cardId){
	document.getElementById(cardId).style.borderWidth = "";
	document.getElementById(cardId).style.backgroundColor = "";
	
}
return styleCars

})(CarLot || {});