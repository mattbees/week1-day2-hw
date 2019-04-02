// Complete hw and add answers as comments where appropriate, then push to github
// Then fill in form (see bookmarks)

// // Exercise 1:
// // 1.1:
// 7 + 3; // returns 10
//
// // 1.2:
// 9 % 2; // returns 1
//
// // 1.3:
// typeof(42); // returns 'number'
//
// // 1.4:
// typeof(2) === typeof(9.24); // true
//
// // 1.5:
// 42 / 0; // returns Infinity
//
// // 1.6:
// 9 / "player1"; // returns NaN
//
// // 1.7:
// NaN === NaN; // false
//
// // 1.8:
// typeof(NaN); // 'number'
//
// // 1.9:
// typeof parseInt("42"); // returns 'number'
//
// // 1.10:
// "Brendan" + " Eich"; // returns 'Brendan Eich'
//
// // 1.11:
// var firstName = "Brendan";
// var lastName = "Eich";
// firstName + " " + lastName;
// // returns 'Brendan Eich'
//
// // 1.12:
// var phoneNumber = "08798976";
// phoneNumber.length;
// // returns 8
//
// // 1.13:
// "Brendan" === "Brendan"; // returns true
//
// // 1.14:
// var fName;
// if(fName) console.log(`First name is ${fName}`);
// // Doesn't log anything
//
// // 1.15:
// var name = "";
// if(name) console.log(`First name is ${name}`);
// // Doesn't log anything - empty string is false

// Exercise 2:

var score = 10;
var award = "";

switch (score) {
  case 10:
    award = "Distinction";
    break;
  case 9:
    award = "Merit";
    break;
  case 8:
    award = "Pass";
    break;
  default:
    award = "Fail";
}

console.log(`Award: ${award}`);

// Exercise 3:

var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
];

for (coffee of coffees) {
  console.log(coffee.type + "s cost £" + coffee.price + " each");
}

// Exercise 4:

var currentPlayer = 'o';
var grid = [['x','o','o'], ['o', 'x', 'o'], [null, null, 'o']];
/* Current scenario (o is currentPlayer):
x o o
o x o
    o
*/

/*
Initial logic of testing all scenarios in one condition leaves no
obvious way to test if currentPlayer wins:
*/
// if (
//     ((grid[0][0] === grid[0][1]) && (grid[0][1] === grid[0][2])) // top row
//     || ((grid[1][0] === grid[1][1]) && (grid[1][1] === grid[1][2])) // mid row
//     || ((grid[2][0] === grid[2][1])) && (grid[2][1] === (grid[2][2])) // bottom row
//     || ((grid[0][0] === grid[1][1]) && (grid[1][1] === grid[2][2])) // top left to bottom right:
//     || ((grid[0][2] === grid[1][1]) && (grid[1][1] === grid[2][0])) // top right to bottom left:
//     || ((grid[0][0] === grid[1][0]) && (grid[1][0] === grid[2][0])) // left column
//     || ((grid[0][1] === grid[1][1]) && (grid[1][1] === grid[2][1])) // mid column
//     || ((grid[0][2] === grid[1][2]) && (grid[1][2] === grid[2][2])) // right column
//   ) {
//     console.log(`${currentPlayer} wins.`);
//   }

// If else statement allows var winner to be updated based on winning value:
var winner;
if ((grid[0][0] === grid[0][1]) && (grid[0][1] === grid[0][2])) { // top row
  winner = grid[0][0];
} else if ((grid[1][0] === grid[1][1]) && (grid[1][1] === grid[1][2]))  { // mid row
  winner = grid[1][0];
} else if ((grid[2][0] === grid[2][1]) && (grid[2][1] === grid[2][2])) { // bottom row
  winner = grid[2][0];
} else if ((grid[0][0] === grid[1][1]) && (grid[1][1] === grid[2][2])) { // top left to bottom right:
  winner = grid[0][0];
} else if ((grid[0][2] === grid[1][1]) && (grid[1][1] === grid[2][0])) { // top right to bottom left:
  winner = grid[0][2];
} else if ((grid[0][0] === grid[1][0]) && (grid[1][0] === grid[2][0])) { // left column
  winner = grid[0][0];
} else if ((grid[0][1] === grid[1][1]) && (grid[1][1] === grid[2][1])) { // mid column
  winner = grid[0][1];
} else if ((grid[0][2] === grid[1][2]) && (grid[1][2] === grid[2][2])) { // right column
  winner = grid[0][2];
}

// Test if currentPlayer matches winner and log result
if (winner === currentPlayer) {
  console.log(`${currentPlayer} wins.`);
} else {
  console.log("No winner.");
}
