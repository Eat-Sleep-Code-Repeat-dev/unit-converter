/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
/*Code for Light/Dark Mode*/

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}



toggleSwitch.addEventListener('change', switchTheme, false);


const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
/*End*/


const lengthConvEl = document.getElementById("lengthConv")
const volumeConvEl = document.getElementById("volumeConv")
const massConvEl = document.getElementById("massConv")
let numInputEl = document.getElementById("num-input")


function convertMeasurements(){
    /*Meter to Feet Conv and vice versa*/

    let metersToFeetNum = numInputEl.value * 3.28084
    let metersToFeetSolution = metersToFeetNum.toFixed(3)

    let feetToMetersNum = numInputEl.value / 3.281
    let feetToMetersSolution = feetToMetersNum.toFixed(3)

    lengthConvEl.textContent = numInputEl.value + " meters = " + metersToFeetSolution + " feet | " + numInputEl.value + " feet = " + feetToMetersSolution + " meters "

    /*Liter to Gallon Conv*/

    let litersToGallonsNum = numInputEl.value / 3.785
    let litersToGallonsSolution = litersToGallonsNum.toFixed(3)

    let gallonsToLiters = numInputEl.value * 3.785
    let gallonsToLitersSolution = gallonsToLiters.toFixed(3)

    volumeConvEl.textContent = numInputEl.value + " liters = " + litersToGallonsSolution + " gallons | " + numInputEl.value + " gallons = " + gallonsToLitersSolution + " liters "

    /*Mass Conv*/

    let kilosToLbsNum = numInputEl.value * 2.205
    let kilosToLbsSolution = kilosToLbsNum.toFixed(3)

    let lbsToKilosNum = numInputEl.value / 2.205
    let lbsToKilosSolution = lbsToKilosNum.toFixed(3)

    massConvEl.textContent = numInputEl.value + " kilos = " + kilosToLbsSolution + " lbs | " + numInputEl.value + " lbs = " + lbsToKilosSolution + " kilos "
}