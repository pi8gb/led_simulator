let state = false;
let button = document.getElementById("buttonInner");
let led = document.getElementById("led");

button.addEventListener("click", function() {
    state = !state;
    if(state == true) {
        led.className = ("ledOn");
        console.log("led on");
    } else {
        led.className = ("ledOff");
        console.log("led off");
    }
});