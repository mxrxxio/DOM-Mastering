// Delegate

const divs = document.querySelectorAll('div')

addGlobalListener('click', 'div',e => {
    console.log("Click")
})

function addGlobalListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e)
    })
}

const newDiv = document.createElement('div')
newDiv.style.height = '200px'
newDiv.style.width= '200px'
newDiv.style.backgroundColor = '#1e1e1e'
document.body.append(newDiv)

