var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      	inventory = JSON.parse(this.responseText);
      	inventory = inventory.cars;
      	populatePage(inventory);
      });
       inventoryLoader.open("GET", "inventory.JSON");
    	inventoryLoader.send();
    },
    getInventory: function() {
    	return inventory;
    }
  };

})();