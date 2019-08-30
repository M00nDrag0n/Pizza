function Pizza(){
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings,
  this.total= [this.size + this.sauce+ this.toppings];
}
console.log();

Pizza.prototype.orderPizza = function() {
  var sizes= ["#item"+ "name" + "value"];
  var sauces = [];
  var toppings = [];
  var total = add(size, sauce, toppings);
    return total;
}
console.log(Pizza.prototype.orderPizza);



$(document).ready(function() {
  getInputs("sz", 1);

  getInputs("sc", 1);

  getInputs("tps", 1);

});

console.log(getInputs);

function getInputs(inputId, listCount){
  $("#form-" + inputId).submit(function(event) {
    event.preventDefault();



    var inputNums = [];
    for(var i=1; i<=listCount; i++){
      inputNums.push(i);
    }

    var items = [size, sauce, toppings];
    inputNums.forEach(function(num){
      items.push($("#item"+num+"-"+inputId).val().toUppercase([0]));
    });

     var add = function(size, sauce, toppings) {
       return size + sauce + toppings;
     };


    items.forEach(function(item){
      $("#receipt"+inputId).append("<input>"+item+"</input>");


      var yourOrder = ("#receipt").text(result);
      var yourOrder = "Your order is"+ add(sz, sc, tps) + ".";

  });
});
};
