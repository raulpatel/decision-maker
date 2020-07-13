// jshint esversion: 7
let index = 0;
//define event handler
let main = function () {
  //dispatch on button id

  if (this.id == "btn1") {
    let x, y, z, a;
    x = document.querySelector("input");
    y = document.querySelector("ol");
    let list = document.querySelectorAll("li");
    z = document.createElement("li");
    a = x.value;
    z.textContent = a;
    y.appendChild(z);
    x.value = "";
    index += 1;
  }

  if (this.id == "btn2") {
    let x, y, i = 0;
    x = document.querySelector("ol");
    while (index - i > 2) {
      let num = Math.floor(Math.random() * index);
      if (x.hasChildNodes()) {
        y = x.childNodes[num];
        x.removeChild(y);
      }
      index -= 1;
    }
  }
  if (this.id == "btn3") {
    let x, y;
    x = document.querySelector("ol");
    let num = Math.floor(Math.random() * 2);
    y = x.childNodes[num];
    x.removeChild(y);
    index -= 1;
  }
  if (this.id == "clear") {
    let x = document.querySelector("ol");
    let y = document.querySelectorAll("li");
    if (x.hasChildNodes()) {
      for (var i = y.length - 1; y.length > 0; i--) {
        x.removeChild(x.childNodes[i]);
        index -= 1;
      }
    }
  }
}; // end of main function

//register event handler
window.addEventListener("load", function () {
  let x, y;
  x = document.querySelector("div");
  y = document.createElement("ol");
  x.appendChild(y);
  let buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i)
    //when the button gets clicked, who ya gonna call?
    buttons[i].addEventListener("click", main);
});
