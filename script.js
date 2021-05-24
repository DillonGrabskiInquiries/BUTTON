function displayMessage(message) {
    console.log(message)
}

function trackMouse(event) {
    console.log(event.clientX, event.clientY)
    body.style.backgroundColor = ('rgb(${event.clientX}, ${event.clientY}, ${event.clientX} - ${event.clientY}')
}

// ya