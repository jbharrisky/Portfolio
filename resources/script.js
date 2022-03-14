// document.getElementById("para").onmouseover = function() {mouseOver()};
// document.getElementById("para").onmouseout = function() {mouseOut()};
//
// function mouseOver() {
//   document.getElementById("para").style.color = "red";
// }
//
// function mouseOut() {
//   document.getElementById("para").style.color = "white";
// }


//
// function mouseOver() {
//   document.getElementById("pic1").style.opacity = "0.5"
// }
//
// function mouseOut() {
//   document.getElementById("pic1").style.opacity = "1.0";
// }

// document.getElementById("pic1").onmouseover = function() {test()};
// document.getElementById("pic1").onmouseout = function() {out()};

document.addEventListener("onmouseover", test);

function test(){
  document.getElementById("pic1").style.opacity = "0.4";
}

function out(){
  document.getElementById("pic1").style.opacity = "1.0"
}
