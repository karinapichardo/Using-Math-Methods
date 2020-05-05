/* 
Tom is a very methodic guy that loves geometry and pizza: he loves them so much that, 
before eating a pizza, he calculates its radius and its height. 
Now, he wants to know from you the total volume of pizza that he swallowed!

You are given the two parameters that Tom measured:
- radius
- height

Implement a function that returns the volume of the pizza as a whole number, rounding it to the nearest integer.
*/

function volPizza(radius, height) {
	var volume = (radius ** 2) * (height * Math.PI);
	return Math.round(volume);
}

//testing our function by calling it 
console.log((volPizza(1, 1))) // --> 3
console.log((volPizza(7, 2))) // --> 308
console.log((volPizza(10, 2.5))) // --> 785
console.log((volPizza(15, 1.3))) // --> 919
console.log((volPizza(20, 1))) // --> 1257
console.log((volPizza(13, 2))) // --> 1062