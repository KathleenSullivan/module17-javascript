'use strict';

//Define a function addFive() that takes a single argument and returns a value
//3 greater than the input.
function addFive(number){
  var newNumber = number +5;
  return newNumber 
}

//Create and log a variable `twelve` that is the result of passing 7 to your
//addFive() function.
var twelve = addFive(7);
console.log(twelve);

//Create and log a variable `twelveString` that is the result of passing "7" to your
//addFive() function. What does this tell you about how the function should be
//described (e.g., in a comment?)
var twelveString = addFive("7");//concatenates string passed as argument with string "5"
console.log(twelveString);

//Create a variable `plusFive` that is equal to your `addFive` function.
var plusFive = addFive; //don't add parentheses after function

//Call the plusFive() function, passing in the number 9, and log the results.

console.log(plusFive(9))


//Create an ANONYMOUS function assigned to a `makePizza` variable. Thus function
//should take in two arguments (size and a topping), and then logs out a String
//describing the given pizza (e.g., "A large pizza with anchovies").

var makePizza = function(size, topping){
  console.log("A "+ size +" pizza with " + topping + ".");
}

//Call the makePizza() function with arguments 'large' and 'anchovies'.
makePizza("large","anchovies");

//Call the makePizza() function again with THREE arguments (a size and two toppings).
//What happens?
makePizza("small","garlic","basil");

//Call the makePizza() function again with only ONE argument (no size, just a topping)
//What happens?
makePizza("leeks");



//Bonus: call the "myFunction" function below with whatever arguments you want!
//What happens? What can you infer about the `arguments` variable in a function?
function myFunction(){
  console.log(arguments);
};
myFunction(1,2,3,4);