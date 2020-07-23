//jshint esversion: 7
//initialize tracker of number of li elements
let count = 0;
//list backup
let list = "";
//define event handler
let main = function () {
  //dispatch on button id

  if (this.id == "btn1") {
    //create new li element in the ol from text in input
    let x, y, z, a, b, c;
    $("#edit").html("Edit the List");
    x = document.querySelector("input");
    y = document.querySelector("ol");
    if (x.value !== "") {
      //checking that input is not blank
      z = document.createElement("li");
      b = document.createElement("button"); //create the remove button
      b.setAttribute("class", "remove");
      b.setAttribute("id", `remove${count}`);
      b.setAttribute(
        "style",
        "float: right; margin-right: 50px; font-size: 12px; padding: 2px 7px 2px 7px; color: white; background-color: red; border-radius: 2vw;"
      );
      b.textContent = "x";
      c = document.createElement("div");
      c.setAttribute("class", "row");
      a = x.value;
      z.textContent = a;
      y.appendChild(c);
      c.appendChild(z);
      z.appendChild(b);
      $(".remove").hide(); //default to hide
      x.value = "";
      count += 1;
      //increment count when li element is added
    }
  }

  if (this.id == "btn2") {
    let x,
      y,
      i = 0;
    $("#edit").html("Edit the List");
    $(".remove").hide();
    x = document.querySelector("ol");
    list = document.querySelectorAll("li");
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
    $("#edit").html("Edit the List");
    $(".remove").hide();
    x = document.querySelector("ol");
    if (list === "") {
      list = document.querySelectorAll("li");
    }
    if (x.hasChildNodes()) {
      while (count - i > 1) {
        let num = Math.floor(Math.random() * count);
        y = x.childNodes[num];
        x.removeChild(y);
        count -= 1;
      }
    }
  }
  if (this.id == "clear") {
    //clears the list html elements to start from scratch
    $("#edit").html("Edit the List");
    let x = document.querySelector("ol");
    x.innerHTML = "";
    count = 0;
    //reset the count
  }
  if (this.id == "edit") {
    if (count !== 0) {
      //adds "x" buttons by each item in the list
      $(".remove").toggle(); //toggle to show remove buttons on click
      $(".remove").off("click"); //reset all listeners
      $(".remove").click(function () {
        let index = Number(this.id.slice(6)); //find which button was clicked
        let ol = document.querySelector("ol");
        ol.removeChild(ol.childNodes[index]);
        if (index < count - 1) {
          for (let i = index + 1; i < count; i++) {
            let x = document.getElementById(`remove${i}`);
            x.setAttribute("id", `remove${i - 1}`);
            /*decrement the index at the end of the id for each button above the
            removed element*/
          }
        }
        count -= 1; //adjust accordingly
        if (count === 0) {
          $("#edit").html("Edit the List");
        }
      });
      $(this).text(function (i, text) {
        return text === "Edit the List" ? "Done" : "Edit the List";
        //toggle button text with each click
      });
    }
  }
  if (this.id == "restore") {
    //if you don't like the final options, return to the original list
    if (list !== "") {
      $("#edit").html("Edit the List");
      let i, x, y, z, a, b;
      x = document.querySelector("ol");
      x.innerHTML = ""; //clear original list
      count = 0; //reset the count
      for (i = 0; i < list.length; i++) {
        //restore the list
        y = document.createElement("li");
        z = document.createElement("button"); //create the remove button
        z.setAttribute("class", "remove");
        z.setAttribute("id", `remove${count}`);
        z.setAttribute(
          "style",
          "float: right; margin-right: 50px; font-size: 12px; padding: 2px 7px 2px 7px; color: white; background-color: red; border-radius: 2vw;"
        );
        z.textContent = "x";
        a = document.createElement("div");
        a.setAttribute("class", "row");
        b = list[i].textContent.slice(0, -1);
        y.textContent = b;
        x.appendChild(a);
        a.appendChild(y);
        y.appendChild(z);
        $(".remove").hide(); //default to hide
        count += 1;
        //increment count when li element is added
      }
      list = "";
    }
  }
}; // end of main function

//register event handler
window.addEventListener("load", function () {
  let x, y, z;
  x = document.getElementById("listHere");
  y = document.createElement("ol");
  z = document.createElement("div");
  z.setAttribute("class", "container-fluid");
  x.appendChild(z);
  z.appendChild(y);
  //creates the ol element on page load in a container
  let buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i)
    //add the main function as a listener to all button clicks
    buttons[i].addEventListener("click", main);
});
