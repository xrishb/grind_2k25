/**
 * in javascript objects are used to store key value pairs and more complex entities.
 * an object can be created with figure brackets {} with an optional list of properties, a property is a key value pair, where key is a string, also called a property name and value can be anything.
 * 
 */

// create an object, using object literal syntax
let user = {
   name: "rish", // key is name and rish is value
   age: 21,
};
// access the objects property using member access operator `.`(dot)
console.log(user.name);


// add a key value property
user.isMarried = false;
console.log(user.isMarried);

// to remove a property use delete keyword and specify the property
delete user.isMarried;

console.log(user);

// to add multi worded property, wrap it using quotes or use bracket notations, dot operator does not work
user["likes birds"] = false;
console.log(user["likes birds"]);

// computed properties
// let fruit = prompt("which fruit to buy?", "apple");
// let bag = {
//    [fruit]: 5,
// };
// console.log(bag.apple);

// making an object from a function
function makeUser(name, age) {
   // return type is object as we are using { }
   return {
      name,
      age,
   };
}
let user2 = makeUser("dan", 25);
console.log(user2);


// object properties can have reserved keywords as their name
let obj = {
   for: 1,
   let: 2,
   return: 3
};
console.log(obj.for + obj.let + obj.return);


// checking if a property exist in an object
let human = {
   body: true,
   hairs: false,
   lifespan: 1000,
};

// in operator is useful for checking if the property exists and its undefined, it access an undefined assigned property using dot operator it will say undefined, but if the property exists and its set to undefined it will say the property exist
console.log("married" in human); // false it does not exist
console.log("body" in human); // true it does exist

// for in loop / for (key in object)
for(let key in human) {
   console.log(`key: ${key} val: ${human[key]}`);
}

// integers in objects are sorted, others are not


// objects refernce and copy

let obj1 = { };
let obj2 = obj1;

// objects are assigned as reference and not as value, means when we directly assign an object to another object, the second object will point to the assigned object's mem location

console.log(obj1, obj2); // empty objects
// now lets try to modify obj2
obj2.name = "johnny";
console.log(obj1, obj2); // see both of the objects are updated with a new property named name

//instead we can loop over an object and assign new object its keys
let obj3 = { };
for(let key in obj1) {
   obj3[key] = obj1[key];
};
// lets modify the object 3
obj3.age = 24;
console.log(obj1, obj3); // the obj1 is not modified

// we can also use a method called `assign()`
// assign(des, [src1, src2, ......])
let obj4 = { };
Object.assign(obj4, [obj1, obj2, obj3]);
console.log(obj4);

// this method: to access the object `this` operator is used
let user5 = {
   name: "javascript",
   greet: function() {
      console.log(`welcome`, this.name); // during the execution the value of this is user5
   },
};
user5.greet();
// this operator is not bound to objects only and functions outside of the object can also use them
function sayName() {
   console.log(this.name + ' hello');
}; 
user5.f = sayName;
user5.f();
// arrow functions do not have this operator
// chaining is calling methods in a chain like sequence

// new operator: allows us to construct objects and use that object as base for other objects
// object constructor names start from capital letter and they should be exectuted using new op
// object constructor returns if we return object explicitly and if we return primitiv then its ignored
function Usr(name) {
   this.name = name;
   this.isAdmin = false;
}
 let usr1 = new Usr('ron');
 console.log(usr1);