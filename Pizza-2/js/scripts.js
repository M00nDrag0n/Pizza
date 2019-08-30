function Pizza() {
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings,
  this.price= 0,


Pizza.prototype.orderPizza = function() {
  var size= [];
  var sauce = [];
  var toppings = [];
  var total = [size + sauce + toppings];
    return total;
}




$(document).ready(function() {
  getInputs("size", 1);

  getInputs("sauce", 1);

  getInputs("toppings", 1);

});

function getInputs(value, listCount){
  $("#form-" + value).submit(function(event){
    event.preventDefault();

    var inputNums = [];
    for(var i=1; i<=listCount; i++){
      inputNums.push($("#item"+num+"-"+value).val().toUppercase(0));
    };

    items.forEach(function(item){
      $("#receipt"+value).append("<input>"+item+"</input>");
    });
    });
}
