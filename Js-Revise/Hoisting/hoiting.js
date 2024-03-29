//Hoisting is JavaScript's default behavior of moving declarations to the top.
x = 5 
var x;
console.log(x);

carName2 = "Volvo";
var carName2;
console.log(carName2);


carName = "Volvo";
//let carName;
console.log(carName);

carName1 = "Volvo";
//const carName1;
console.log(carName1);

console.log(singer);
var singer;
singer = "sonu";

//Declarations are hoisted
//initilaizations are not hoisted
//let - reference error
//const - synatx error (code will not run)

//function hoisting
//example 1
function printHello() {
    console.log("hello")
  }
  
  printHello()

  //example 2
  printHello()


function printHello() {
  console.log("hello")
}

//eample 3
printHello()
// hello

printDillion()
// ReferenceError: printDillion is not defined

function printHello() {
  console.log('hello')

  function printDillion() {
//console.log("dillion")
  }
}

//example 4
printHello()
// hello

function printHello() {
  printDillion()
  // dillion

  console.log('hello')

  function printDillion() {
    console.log("dillion")
  }
}

//
console.log(x);

var x = "Educative is amazing!";

console.log(x);