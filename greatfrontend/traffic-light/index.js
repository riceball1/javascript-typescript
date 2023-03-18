

// Get the elements that will be modified
const redLight = document.getElementsByClassName('redLight')
const yellowLight = document.getElementsByClassName('yellowLight')
const greenLight = document.getElementsByClassName('greenLight')


/*
The solution I ended up using recursion and setTimeout to activate the traffic light

Some considerations different from the solution on GFE I didn't do was consider a11y adding aria-label and aria-live, as well as using javascript to inject the elements, instead I chose to hardcode the traffic light in html

*/
const lights = [ { light: redLight[ 0 ], duration: 4000 },
{ light: yellowLight[ 0 ], duration: 500 },
{ light: greenLight[ 0 ], duration: 3000 } ]

function activateTrafficLight(count = 0) {
    const currentLight = lights[ count % lights.length ];

    activate(currentLight.light);
    setTimeout(() => {
        deactivate(currentLight.light);
        activateTrafficLight(count + 1);
    }, currentLight.duration);
}

activateTrafficLight()


function activate(light) {
    return light.classList.add('active')
}

function deactivate(light) {
    return light.classList.remove('active')
}

