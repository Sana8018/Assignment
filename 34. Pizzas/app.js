var myPizza = ["Cheese Pizza", " Fajita Pizza", "Vegetarian Pizza"];
// print only names of pizza
for (var i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
//printing names and sentence/ message
for (var i = 0; i < myPizza.length; i++) {
    console.log("I like to eat ".concat(myPizza[i]));
}
console.log("\nI really to eat pizzas. Pizza comes in a variety of flavors and toopings, allowing to customize is to their liking.");
