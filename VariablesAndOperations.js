//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 29;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 92.62;

//create a variable to hold a person's middle initial
let middleInital = 'G';

//create a variable to hold true if it's hot outside and false if it's cold outside
var itIsHotOutside = true;

//create a variable to hold a customer's first name
var customersFirstName = 'Dave';

//create a variable to hold a street address
var streetAddress = '123 Somewhere ln';

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInital);
console.log(itIsHotOutside);
console.log(customersFirstName);
console.log(streetAddress);




//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
costOfGroceries = costOfGroceries + 2.16;
console.log(costOfGroceries);
//I ussed 2.16 to have a more rounded number in the console wiht 2.15 it was coining out to 94.77000000001

//birth certificate was printed incorrectly, change the middle initial to something else
middleInital = "D";
console.log(middleInital);
//the season has changed, update the hot outside variable to be opposite of what it was
itIsHotOutside = !itIsHotOutside;
console.log(itIsHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customersFirstName +' ' + middleInital +' ' + 'Doofenshmirtz'
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hello, I am " + fullName + " and I live at " + streetAddress + '.');
