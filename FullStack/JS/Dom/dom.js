/*
   dom is runtime data structure created by the browser.

   when a browser loads a webpage three things happen:
      - first browser reads the hmtl and parses it, means converting the text into structural objects, leading into the creation of dom tree.

      - second, the browser parses css and creates cssom, separate tree that represents style.

      -third the browser combines dom and cssom that creates the render tree which is rendered to the webpage.

      js primarly interacts with dom and not html.
      dom is an object graph living in the memory

      every node tree has exactly one parent, except the root.
      nodes can have multiple children.
      order matters

      each node has shared properties
         nodeType
         nodeName
         nodeValue
         parentName
         childNodes


      every dom tree has one root - `document`, it owns the entire tree, exposes entry points such as body, head, documentElement, and acts as a bridge between dom and js. nodeType = 9

      element nodes represents html tags, nodeType === 1, nodeName === tagName, it can have children and attributes.

      commentNode, type === 8, nodeName = #comment

*/

// document is a global object, created by the browser
console.log(document);

// print the state of the document, loading=dom is being built, interactive= dom is ready, resource may load, complete=everything loaded
console.log(document.readyState);

// defer: script downloaded in parallel, executes once the dom is parsed, order preserved
// async:  executes as soon as its ready, order not guaranteed


// before changing dom content we must obtain a refernce to a node
const p1 = document.getElementById('p1'); // we made a reference to the p1 id element..

// getElementById returns one element or null ids are unique by spec faster selector


// getElementsByClassName: returns a HTMLCollection, live: auto update the dom once modified

const items = document.getElementsByClassName('list');
for(let i = 0; i < items.length; i++) {
   items[i].style.color = '#3ece1aff';
}
// its an array. indexed using [], has length but no array methods

// getElementsByTagName: returns all elements by found tag, live, it can be called on any element
const tagelements = document.getElementsByTagName('li');
for(let i = 0; i < tagelements.length; i++) {
   tagelements[i].style.fontSize = '32px';
}

// HTMLCollection: returned by getElementsBy, live, element Nodes only
// NodeList: returned by some new apis can be static or live may include non elements
// the difference matters for performance

// modern selectors

// querySelector: returns the first matching index or null, uses css selector syntax, static, can be called on any element

const p2 = document.querySelector('.p2');
p2.style.color = 'red';

// querySelectorAll: returns NodeList, static snapshot of matches, order matches document order, if the dom changes later the list is not changed thats why its preferred

// some common css selectors
// "#id"
// ".class"
// "div > p"
// "ul li.active"
// "input[type='text']"
// "[data-role='admin']"

// scoped queries improves performance
const container = document.querySelector('.container');
const list2 = container.querySelectorAll('.list2');

// reading and modifying content
// textContent = the raw text of elements, ignores css
for(let i = 0; i < list2.length; i++) {
   list2[i].textContent = "list items modified via js access";
}

const p3 = document.querySelector('.p3');
// innerText = rendered text ingores css slower
p3.innerText = "hello wolrd";

const p4 = document.querySelector('.p4');
p4.innerHTML = "<strong>Hello</strong>"; // parses string as html, executes html, risky user input injected directly can execute scripts


// attribute = inital state, property = current state
const input = document.querySelector('#x');
input.getAttribute("id");
input.setAttribute("title", "info");
input.removeAttribute("hidden");

// styling
// property names are camelCase and values are strings, it only effects that element

console.log(getComputedStyle(input));

// css variables via dom. useful for theme toggling, scales cleanly
document.documentElement.style.setProperty("--primary", 'blue');

// does not work if its in css file
document.body.style.removeProperty("background-color"); // does not effect as css is not inline but rather in a stylesheet

// class manipulation, how state is represented in dom
// a class is space-separated token list exposed as live api in js

console.log(p4.className);
// className is a string,  is dangerous as it removes all existing classes, it causes ui breaks

// classList - token interface its a DOMTokenList not a string, its a read only property
// it understands- tokens, uniqueness, ordering

// core operations
// add()
p4.classList.add('paragraph'); // adds a token to the list, ommits if exists already

// remove() a token
p4.classList.remove('paragraph');

// contains(): check for a token if it exists
let isPresent = p4.classList.contains('paragraph');
console.log(isPresent);

// toggle(): if its in the list, remove it, if not add it
p4.classList.toggle('paragraph');