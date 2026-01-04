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

// mouse events

/*
    simple mouse events
    - mousedown/mouseup: mouse button is clicked/released over an element
    - mouseover/mouseout: mouse pointer comes over/out of an element
    - mousemove: every mouse movement on the element
    - contextmenu: triggers when we try to open context menu


    complex events
    - click: triggers after mousedown and mouseup over the same element if left button was clicked
    - dblcick: triggers after double click on the element

    events order:
        click first triggers mouse down and when released its mouseup and then click.

        which returns which mouse button was pressed
        1- left, 2-mid- 3-right
        e.witch
    
        modifier keys
        shiftkey
        altkey
        ctrlkey
        metakey
*/
btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', (e)=> {
    if(e.shiftKey) {
        btn3.textContent = `btn clicked using ${e.button} key`;
    }
});
info.addEventListener('copy', (e)=> {
    e.preventDefault();
    info.textContent = `no copy pasting`;
});

// othermouse events: dragstart, dragend

// --- Keyboard Events ---
// keydown: triggered when a key is pressed down
// keyup: triggered when a key is released
// keypress: (Deprecated) - Use keydown instead.

window.addEventListener('keydown', (e) => {
    // e.key is the character (e.g., 'a', 'Enter')
    // e.code is the physical key location (e.g., 'KeyA', 'Digit1')
    console.log(`Key pressed: ${e.key} | Physical Code: ${e.code}`);
    
    // Example: A shortcut (Ctrl + S)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault(); // Stop the browser from trying to save the webpage
        console.log("Custom 'Save' logic triggered!");
    }
});

// --- Page Lifecycle Events ---
// DOMContentLoaded: The HTML is loaded and the DOM tree is built (Scripts can run now)
// load: The whole page is loaded, including images, styles, and external resources

document.addEventListener('DOMContentLoaded', () => {
    console.log("The DOM is fully built!");
});

window.addEventListener('load', () => {
    console.log("The entire page (including images) is finished loading!");
});

// --- Focus/Blur Events ---
// focus: when an element (like an input) gains focus
// blur: when it loses focus (these do NOT bubble)

const myInput = document.createElement('input');
myInput.placeholder = "Type something...";
document.body.appendChild(myInput);

myInput.addEventListener('focus', () => {
    myInput.style.backgroundColor = 'lightyellow';
});

myInput.addEventListener('blur', () => {
    myInput.style.backgroundColor = '';
});

// --- Scroll Events ---
// Triggered when the user scrolls the page or an element
window.addEventListener('scroll', () => {
    // Calculate how far we've scrolled
    const scrollPixels = window.scrollY;
    // Useful for 'Back to top' buttons or sticky headers
});