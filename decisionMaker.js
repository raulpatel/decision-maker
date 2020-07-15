// jshint esversion: 7

//initialize tracker of number of li elements
let count = 0;
//define event handler
let main = function () {
  //dispatch on button id

  if (this.id == "btn1") {
    //create new li element in the ol from text in input
    let x, y, z, a;
    x = document.querySelector("input");
    y = document.querySelector("ol");
    if (x.value != "") {
      //checking that input is not blank
      z = document.createElement("li");
      a = x.value;
      z.textContent = a;
      y.appendChild(z);
      x.value = "";
      count += 1;
      //increment count when li element is added
    }
  }

  if (this.id == "btn2") {
    let x,
      y,
      i = 0;
    x = document.querySelector("ol");
    if (x.hasChildNodes()) {
      //condition check to ensure there are currently li elements
      while (count - i > 2) {
        //loops until 2 li elements remain
        let num = Math.floor(Math.random() * count);
        //generates random number between 0 and the last index of li elements
        y = x.childNodes[num];
        x.removeChild(y);
        count -= 1;
        //remove the li element at that index and decrement the count
      }
    }
  }
  if (this.id == "btn3") {
    //same as btn2 but loops until one li element remains
    let x,
      y,
      i = 0;
    x = document.querySelector("ol");
    if (x.hasChildNodes()) {
      while (count - i > 1) {
        let num = Math.floor(Math.random() * 2);
        y = x.childNodes[num];
        x.removeChild(y);
        count -= 1;
      }
    }
  }
  if (this.id == "clear") {
    //clears the list html elements to start from scratch
    var myList = document.querySelector("ol");
    myList.innerHTML = "";
    count = 0;
    //reset the count
  }
}; // end of main function

//register event handler
window.addEventListener("load", function () {
  let x, y;
  x = document.querySelector("div");
  y = document.createElement("ol");
  x.appendChild(y);
  //creates the ol element on page load after the div
  let buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i)
    //add the main function as a listener to all button clicks
    buttons[i].addEventListener("click", main);
});
