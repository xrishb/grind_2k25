/*
   document object model represents all page content as objects that can be modified.

   the document object is the main entry point of a page, we can change and create anything on the page using it.

   according to dom every html tag is an object, nested tags are children of the enclosing one, the text inside the tag is object as well.
*/

document.body.style.background = 'black';
document.body.style.color = 'white';

// browser object model

// const agent = navigator.userAgent;
// console.log(agent);

// const platform = navigator.platform;
// console.log(platform);

// for(let i = 0; i < document.body.childNodes.length; i++) {
//    console.log(document.body.childNodes[i]);
// }

// searching for an object in the dom

// getElementById: if an element has some id we can use this method, it returns a refernce to the element
const para1 = document.getElementById('p1');
if(para1) {
   para1.style.color = 'gold';
}
// querySelectorAll(css): returns all elements with given argument, it returns a static NodeList, it allows for more complex selecting
let elements = document.querySelectorAll('p');
for(let elem of elements) {
   console.log(elem.innerText);
}

// querySelector(css): returns the first element of the given css selector
// innerHTML allows to get the html inside an element as a string
para1.innerHTML = "the new body <hr/>";

// textContent: provides access to the text inside the element