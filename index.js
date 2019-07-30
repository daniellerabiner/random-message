var foods = ["Salad","Rice","Pasta", "Acai Bowls","pizza","Sushi","Eggs Benidict", "Sandwich","Tacos","Peppa"];
var output= $('h2')
var button=$('.yes')
var body=$('body')


button.on("click", feedMe);

function feedMe(){
  var food = Math.floor(Math.random() * foods.length);
  console.log("Hello");
  output.text(foods[food])
  if(foods[food]=='Peppa') {
    output.css("background-color", "pink");
  }
  else {
    output.css("background-color", "white");
  }
}
