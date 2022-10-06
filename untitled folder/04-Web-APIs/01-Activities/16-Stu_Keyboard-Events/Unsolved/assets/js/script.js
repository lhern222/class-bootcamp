function keydownAction(event) 
  // TODO: Complete keydown function
var kepPress = event.key;

var keyCode = event.composed;

function keyupAction(event) {
  document.querySelector("#key").textContent = keyPress;
  document.querySelector("#code").textContent = keyCode
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("KEYUP", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("KEYDOWN", keydownAction);

//EventTarget.addEventListener("KEYUP", (Event) => {
  //if (Event.addEventListener || Event.keyCode === 229) {
   // return;
  //}
//});