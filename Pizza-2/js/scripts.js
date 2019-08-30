function Pizza(){
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings,
  this.total= [this.size + this.sauce+ this.toppings];


Pizza.prototype.orderPizza = function() {
  var size= [];
  var sauce = [];
  var toppings = [];
  var total = [size + sauce + toppings];
    return total;
}

console.log(size);


$(document).ready(function() {
  getInputs("sz", 1);

  getInputs("sc", 1);

  getInputs("tps", 1);

});

function getInputs(value, listCount){
  $("#form-" + value).submit(function(event){
    event.preventDefault();

    var inputNums = [];
    for(var i=1; i<=listCount; i++){
      inputNums.push(i);
    }

    var items=[];
    inputNums.forEach(function(num){
      items.push($("#item"+num+"-"+value).val().toUppercase(0));
    });

    items.add();

    items.forEach(function(item){
      $("#receipt"+value).append("<input>"+item+"</input>");
    });
    });
}
