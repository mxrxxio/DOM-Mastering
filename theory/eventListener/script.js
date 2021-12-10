const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const children = document.querySelector(".children")

/* 
    addEventListener can take 2 to 3 arguments
    1. Event (search in Google what looking for)
    2. Callback
    3. Special parameter (change behaviour)
*/

// Bubbling (moving upward like a bubble)
grandparent.addEventListener('click', e => {
    console.log('GrandParent clicked')
    // most important item is target, the thing that we clicked
})

// capture moving reverse to a bubble
parent.addEventListener('click', e => {
    console.log('Parent capture')
}, {capture: true, once: true})

children.addEventListener('click', e => {
    console.log('Children click')
    // once is what you think
}, {once: true})

document.addEventListener('click', () => {
    console.log('Document click')
})

document.addEventListener('click', (e) => {
    console.log('Document capture')
    // stop de propagation in this statement
    e.stopPropagation()
}, {capture: true, once: true})


// Remove Listeners
parent.addEventListener('click', sayHello)
setTimeout(() => {
    parent.removeEventListener('click', sayHello)
}, 2000)
function sayHello() {
    console.log("Hola mundo")
}