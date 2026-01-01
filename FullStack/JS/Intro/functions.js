/*
   functions are the building block of the program, it allows us to wrap code under a single name.
   functions make code reusable and increase readability.
 */

// create the  function 
function showMessage(){
   console.log('holow from the function!');
}
// now call it to execute it in the main flow of the program
showMessage();


// we can take parameters(placeholder values) if we want to work on some specific data
let a = 10, b = 10;

function addTwoNums(num1, num2) {
   return num1 + num2;
}
console.log(addTwoNums(a, b));


// local variables inside the function belongs only to that function, using it outside the body will give undefined error. if we have a outer variable and inner variable named equally then the inner variable will be used.
function newYearMessage(){
   let nym = 'happy new year';
   console.log(nym);
}
newYearMessage();
// nym = 'this is not defined'; its outside of the function body


// global vars = variable declared outside of any function.

// if a function is called, but an argument is not provided then the corresponding value becomes undefined, and numerical return functions values becomes NaN

// to fix this we can use default values

function showMessage(from, text = "no text given") {
   console.log( from + ": " + text );
}
showMessage("rishab","js sucks");


// this is also possible: func showmsg(from, text=somefunc()){....}
// a function without return, returns undefined.
// a function in js is a value so we can copy a function to a variable directly.



// function expression/anonymous functions: allows to create a function in the middle of an expression
// they are used as quickly assigning some values to a variable, useful in callback functions
let sum =  function () {
   return a+b; 
}; // healthy practice to put it at the end of the the }
console.log(sum());




/* callback functions
   a function passed as an argument to another function then executed later.

   in basic terms it means: once your task is finished, run this function for me.

   callbacks allows to avoid blocking execution while still defining what should happen when the data is available.
*/

function greetUser(uname, callback) {
   console.log("hello "+uname);
   callback();
}
function goodbye() {
   console.log("goodbye!");
}
greetUser('rishbh', goodbye);


/*
arrow functions: assigning anonymous functions to a variable, an arrow function returns a value implicitly, means i dont have to use return keyword, if the value is directly after the arrow, but if we have a curly bracket, we must return explicitly.

these functions are always anonymous
*/
const sumThree = (a, b, c) => a+b+c; 
console.log(sumThree(5,5,5));

const sayHi = () => {
   console.log('hi');
}
sayHi();