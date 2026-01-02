'use strict';
// an array can store multiple values of any type in a contiguous memory block
// there are two ways to create arrays
// let arr = new Array(); array literal, less used


// this is more common and we can initalize it with elements
let arr= [1,2,3,4];
// access its elements using bracket access
console.log(arr[0]);
console.log(arr); // print everything from array
arr[0] = -1; // replace an element
console.log(arr); // print everything from array


// add a new element to the array, wrrr
arr[4] = 5;
console.log(arr); // print everything from array


// print total elements in the array
let len = arr.length;
console.log(len);

// what is this massaccre
let mixed = [1, "apple", {name: "stockton"}, true, function(){console.log("hello wolrd!");}];
mixed[4]();

// an array may also be ended with a trailing comma

let fruits = [
   "apple",
   "pear",
   "banana",
];

// push pop shift unshift

// push appends an element to the end of the array
// shift gets an element from the beginning and 2nd element becomes the first
// pop removes an element from the end
console.log(fruits);


fruits.pop(); // banana removed
console.log(fruits);


fruits.push("pineapple"); // pineapple added to the end of the array
console.log(fruits);


fruits.shift();
console.log(fruits); // apple removed from the beginning

fruits.unshift('apple'); // apple added to the front of the array
console.log(fruits); 

// add multiple element at once
fruits.push("peach", "papaya");
console.log(fruits);

fruits.unshift("watermelon", "grape");
console.log(fruits);

// arrays are copied by refernece

// to copy an array we can use spread operator, it unpacks the elements of the old array into brand new array
let copiedFruits = [...fruits];
console.log(copiedFruits);

// another method is a built in static method that creates a new array from any array like obj
// let copiedFruits = Array.from(fruits);

// these both ways create a shallow copy, means only high level or surface level elements are copied, nested object properties are still referencing to the old location

// to fix this issue we use structuredClone
let deepCopy = structuredClone(fruits);

// cycle the array
for(let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
}
// instead we can use for each of loop, it gives direct values and not indices
for(let fruit of fruits) {
   console.log(fruit);
}

// length = last index+1

// we can create an array using new keyword
// let arr = new Array(1, 2, 3, 4);

// arr.splice(start, [, deleteCount, elem1, elem2....])
// It modifies arr starting from the index start : removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
let msg = ["i", "hate", "js"];
msg.splice(1, 1, "absolutely", "neglect");
console.log(msg);

// arr.slice returns a new array copying all elements from i to n, it does not effect the orignal array, its non destructive
let chars = ['a', 'b', 'c'];
let res = chars.slice(1, 2);
console.log(res);

// concat methods concatenates two or more arrays and returns them
let newFruits = fruits.concat(msg);
console.log(newFruits);

// searching an element

// indexOf returns the first index the element is found if not found returns -1
let nums = [1,2,3,4,5];
let foundIndex = nums.indexOf(5);
console.log(foundIndex);

// includes: returns true if found. if not return false
console.log(nums.includes(10));

// lastIndexOf returns the lastmost index the element is found at, otherwise -1
nums.push(1);
console.log(nums.lastIndexOf(1));

console.log(nums);

// sort the array:sort() method sorts the array in place
console.log(nums.sort());
console.log(fruits.sort());
console.log(mixed.sort());