function Pizza(){
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings,
  this.total= [this.size + this.sauce+ this.toppings];
}
console.log();

Pizza.prototype.orderPizza = function() {
  var size= ["#item"+ "name" + "value"];
  var sauce = [];
  var toppings = [];
  var total = add(size, sauce, toppings);
    return total;
}
console.log(Pizza.prototype.orderPizza);



$(document).ready(function() {
  getInputs("formOne", 1);


});

console.log(getInputs);

function getInputs(inputId, listCount){
  $("#form-" + inputId).submit(function(event) {
    event.preventDefault();



    var inputNums = [];
    for(var i=1; i<=listCount; i++){
      inputNums.push(i);
      $("input:checkbox:checked").each(function(){

      })
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
      console.log(item);


      var yourOrder = ("#receipt").text(result);
      var yourOrder = "Your order is"+ add(sz, sc, tps) + ".";
      $("#receipt").show();


      console.log(yourOrder);
  });
});
};
