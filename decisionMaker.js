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
    let input, ol, li, text, remove, div;
    $("#edit").html("Edit the List");
    input = document.querySelector("input");
    ol = document.querySelector("ol");
    if (input.value !== "") {
      //checking that input is not blank
      li = document.createElement("li");
      remove = document.createElement("button"); //create the remove button
      remove.setAttribute("class", "remove");
      remove.setAttribute("id", `remove${count}`);
      remove.setAttribute("label", `remove item #${count}`);
      remove.setAttribute(
        "style",
        "float: right; margin-right: 50px; font-size: 12px; padding: 2px 7px 2px 7px; color: white; background-color: red; border-radius: 2vw;"
      );
      remove.textContent = "x";
      div = document.createElement("div");
      div.setAttribute("class", "row");
      text = input.value;
      li.textContent = text;
      ol.appendChild(div);
      div.appendChild(li);
      li.appendChild(remove);
      $(".remove").hide(); //default to hide
      input.value = "";
      count += 1;
      //increment count when li element is added
    }
  }

  if (this.id == "btn2") {
    let ol, item;
    $("#edit").html("Edit the List");
    $(".remove").hide();
    ol = document.querySelector("ol");
    if (count > 2) {
      list = document.querySelectorAll("li");
    }
    if (ol.hasChildNodes()) {
      //condition check to ensure there are currently li elements
      while (count > 2) {
        //loops until 2 li elements remain
        let num = Math.floor(Math.random() * count);
        //generates random number between 0 and the last index of li elements
        item = ol.childNodes[num];
        ol.removeChild(item);
        count -= 1;
        //remove the li element at that index and decrement the count
      }
    }
  }
  if (this.id == "btn3") {
    //same as btn2 but loops until one li element remains
    let ol, item;
    $("#edit").html("Edit the List");
    $(".remove").hide();
    ol = document.querySelector("ol");
    if (list === "") {
      list = document.querySelectorAll("li");
    }
    if (ol.hasChildNodes()) {
      while (count > 1) {
        let num = Math.floor(Math.random() * count);
        item = ol.childNodes[num];
        ol.removeChild(item);
        count -= 1;
      }
    }
  }
  if (this.id == "clear") {
    //clears the list html elements to start from scratch
    $("#edit").html("Edit the List");
    let ol = document.querySelector("ol");
    ol.innerHTML = "";
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
            let remove = document.getElementById(`remove${i}`);
            remove.setAttribute("id", `remove${i - 1}`);
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
      let i, ol, li, remove, div, text;
      ol = document.querySelector("ol");
      ol.innerHTML = ""; //clear original list
      count = 0; //reset the count
      for (i = 0; i < list.length; i++) {
        //restore the list
        li = document.createElement("li");
        remove = document.createElement("button"); //create the remove button
        remove.setAttribute("class", "remove");
        remove.setAttribute("id", `remove${count}`);
        remove.setAttribute("label", `remove item #${count}`);
        remove.setAttribute(
          "style",
          "float: right; margin-right: 50px; font-size: 12px; padding: 2px 7px 2px 7px; color: white; background-color: red; border-radius: 2vw;"
        );
        remove.textContent = "x";
        div = document.createElement("div");
        div.setAttribute("class", "row");
        text = list[i].textContent.slice(0, -1);
        li.textContent = text;
        ol.appendChild(div);
        div.appendChild(li);
        li.appendChild(remove);
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
  let divListHere, ol;
  divListHere = document.getElementById("listHere");
  ol = document.createElement("ol");
  divListHere.appendChild(ol);
  //creates the ol element on page load in a container

  $("input").keypress(function (event) {
    if (event.key === "Enter") {
      let text, remove, div, input, ol, li;
      //if enter is pressed
      input = document.querySelector("input");
      ol = document.querySelector("ol");
      if (input.value !== "") {
        //checking that input is not blank
        li = document.createElement("li");
        remove = document.createElement("button"); //create the remove button
        remove.setAttribute("class", "remove");
        remove.setAttribute("id", `remove${count}`);
        remove.setAttribute("label", `remove item #${count}`);
        remove.setAttribute(
          "style",
          "float: right; margin-right: 50px; font-size: 12px; padding: 2px 7px 2px 7px; color: white; background-color: red; border-radius: 2vw;"
        );
        remove.textContent = "x";
        div = document.createElement("div");
        div.setAttribute("class", "row");
        text = input.value;
        li.textContent = text;
        ol.appendChild(div);
        div.appendChild(li);
        li.appendChild(remove);
        $(".remove").hide(); //default to hide
        input.value = "";
        count += 1;
        //increment count when li element is added
      }
    }
  });

  $(".fa").click(function () {
    $("#overlay").slideDown("fast");
  }); //show instructions

  $("#overlay").click(function () {
    $("#overlay").slideUp("fast");
  }); //hide instructions

  let buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i)
    //add the main function as a listener to all button clicks
    buttons[i].addEventListener("click", main);
});
