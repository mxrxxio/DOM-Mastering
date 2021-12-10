const nav = document.getElementById("nav-elements");
const childs = Array.from(document.getElementsByClassName('grand-child')); // take an array from
const padre = document.querySelector(".father");
const allChild = document.querySelectorAll(".grand-child");

// children selecton from a parent
const hijos = Array.from(padre.children);

// in plural, use forEach

// change color fucntions
function changeColor(element) {
    element.style.backgroundColor = "#ebc82f";
    element.style.color = "#1e1e1e";
};

function returnColor(element) {
    element.style.backgroundColor = "#fff";
    element.style.color = "#1e1e1e";
};

function bruhColor(element) {
    element.style.backgroundColor = "#5941B7";
    element.style.color = "#1e1e1e";
};

changeColor(padre);
changeColor(nav);
childs.forEach(changeColor);
allChild.forEach(returnColor);

const firstChildren = hijos[0];
const secondChildren = firstChildren.children;

// select parents from childs
const secondChild = document.querySelector('#second-child');
const secondChildParent = secondChild.parentElement;
const secondChildParentParent = secondChildParent.parentElement;

// Tests
returnColor(firstChildren);
returnColor(secondChildren[0]);
bruhColor(secondChild);
bruhColor(secondChildParent);
bruhColor(secondChildParentParent);

// Sibling elements
const nextChild = secondChildParent.nextElementSibling;
bruhColor(nextChild);
returnColor(nextChild.previousElementSibling);