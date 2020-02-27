/* DOM MANIPULATION */
// DOM Selectors
document.getElementsByTagName("tag");
document.getElementsByClassName("classname")[0];
document.getElementById("id");

document.querySelector("selector"); /* can query any selector, h1:nth-child(n) - grabs the first it finds*/
document.querySelectorAll("selector,selector"); /* can query any amount of selector, grabs all */

.getAttribute("attributeName"); /* document.querySelector("h1").getAttribute("class") - collects attribute value*/
.setAttribute("attributeName", "newValue"); /* document.querySelector("h1").setAttribute("id","newId") - sets id of the first h1 to newId */

.className /* selects the first class of the selector */
.classList /* gives a list of all the class of the selector */
.classList.add /* adds a class to the existing list of classes on the selector */
.classList.remove /* removes a class to the existing list of classes on the selector */
.classList.toggle /* toggles a class from the existing list of classes on the selector */

.parentElement /* document.querySelector("h1").parentElement - grabs the parent element of the h1*/
.children  /* document.querySelector("h1").children - grabs the children elemenst of the h1*/

// Its important to CACHE selectors in variables so the dont use up browser memory


// DOM Events
/* https://developer.mozilla.org/en-US/docs/Web/Events */

.addEventListener("click", function () { 
    console.log("something"); 
})

.addEventListener("mouseenter", function () { 
    console.log("something"); 
})

var x = document.createElement("li"); /* create a new element (in this case a li) and stores it in a var */
x.appendChild(document.createTextNode("something")); /* appends a child to the li element (in this case text note we create) */