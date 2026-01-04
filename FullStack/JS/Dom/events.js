// an event is an indication that something has happened
// to react on those events we assign them an event handler- a function that runs incase of an event


const btn1 = document.querySelector('#btn1');
let count = 0;
// btn1.onclick = function() {
//     count ++;
//     btn1.textContent = `this button is clicked ${count} times`;
// }
// there is only one onclick property, if we try to do it again, then the new one overwrites the previous onclick functionality completely.

// we can also remove an handler using 
// btn.onclick = null;

// the functions should not be assigned as 
// element.onclick = fn();, it rather assigns the returned value from the function. first the function is evaluated/called and then assigned the value.

// rather we assign it as
// element.onclick = fn;

// in element we can also use `this` it will refernece to the element itself.

// to fix the issue of onclick where it overwrite the existing fnctionality, we use addEventListener

// element.addEventListener(event, handler[, option])
// event = event name, such as click, mouseover, etc
// handler = the handler function
// options = an additional object with properties
// options- once: if true, the listener is removed once triggered, capture: phase where to handle the event, passive: if true then handler will not preventDefault()


// to remove the handler use removeEventListener

btn1.addEventListener("click", () =>{
    count++;
    btn1.textContent = `btn clicked ${count} times!`;
});

const btn2 = document.querySelector('.btn2');
const info = document.querySelector('.info');

btn2.addEventListener("click",(e) => {
    info.textContent = `${e.type} at ${e.currentTarget} \n cords (x): ${e.clientX} (y): ${e.clientY}`; 
});

// bubbling: when an event happens, it first runs the handler on its element and than its parents.
// 
// starts from the element and goes upwards till it eaches html and then document object, some events do reach window as well.


// but any element can decide to stop the bubbling after the event is fully processed.
// event.stopPropagation(): removes the current handler's bubbling
// event.stopImmediatePropagation(): prevents all handler's bubbling from happening


// capturing: moving from root to the specific element to capture the element where event was fired

// event deligation: if we have alot of elements handled in the same way, instead of handling them separately we assign a common handler to their ancestor

btn2.addEventListener("click", (e) => {
    let target = e.target;
    info.textContent = `${target.className}`;
    
});

// preventDefault() prevents the browser from doing default actions the browser does

