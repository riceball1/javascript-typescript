

// Get the elements that will be modified
const redLight = document.getElementsByClassName('redLight')
const yellowLight = document.getElementsByClassName('yellowLight')
const greenLight = document.getElementsByClassName('greenLight')


/*
The solution I ended up using recursion and setTimeout to activate the traffic light

Some considerations:
- a11y adding aria-label and aria-live
- using javascript to inject the elements
- reusability of components
- using `beforeunload` to clear any running intervals -- though I think since my solution only had a setTimeout, I would want to clear that

*/
const lights = [ { light: redLight[ 0 ], duration: 4000 },
{ light: yellowLight[ 0 ], duration: 500 },
{ light: greenLight[ 0 ], duration: 3000 } ]


let timerId;

function activateTrafficLight(count = 0) {
    const currentLight = lights[ count % lights.length ];

    activate(currentLight.light);
    setTimeout(() => {
        deactivate(currentLight.light);
        activateTrafficLight(count + 1);
    }, currentLight.duration);
}

activateTrafficLight()

/*

Addition: add clearTimeout to avoid memory leak
this will be done when 'beforeunload' -- a user is closing a window/tab 
*/

window.addEventListener('beforeunload', () => {
    stopTrafficLight()
})

function stopTrafficLight() {
    clearTimeout(timerId);
  }

function activate(light) {
    return light.classList.add('active')
}

function deactivate(light) {
    return light.classList.remove('active')
}

