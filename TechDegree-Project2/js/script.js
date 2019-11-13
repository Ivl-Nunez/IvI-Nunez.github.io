/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Author: Michael Nunez
Date: 11/8/2019
******************************************/

/*** 
 Global Variables
***/
const studentLIs = document.getElementsByClassName("student-item"); // array of students based on class .student-item
const maxStudentsShown = 10; // Total number of items show on each page

/*** 
 Function to show # of students depending on page chosen,
   hides other students that are not within page range.
 Takes in a list of students and a page to show. Based on
   this list and page, the elements are shown / hidden.
***/
const showPage = (list, page) => {
  // Start and End range for items to be shown
  const startIndex = page * maxStudentsShown - maxStudentsShown;
  const endIndex = page * maxStudentsShown;

  // Loop through list showing / hiding list items
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  } //END_LOOP
}; //END_FUNC

/*** 
   Function to create page links and handle clicks
***/
const appendPageLinks = list => {
  /** SETS UP BASE ELEMENTS */
  // Setup DIV element
  const div = document.createElement("div"); // creates div
  div.className = "pagination"; // adds class .pagination to div
  document.getElementsByClassName("page")[0].appendChild(div); // appends new div to 'page' div
  // Setup UL element
  const ul = document.createElement("ul"); // creates ul element
  ul.setAttribute("id", "ulForLinks");
  div.appendChild(ul); // adds ul to pagination div

  /** CREATES PAGE LINKS **/
  for (let i = 1; i < list.length / maxStudentsShown + 1; i++) {
    // Creating and Setting up <li> & <a>
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = i;

    // The first link is set to class 'active'
    if (i == 1) {
      a.className = "active";
    }
    // Add <a> -> <li>
    li.appendChild(a);
    // Add <li> -> <ul>
    ul.appendChild(li);
  } //END_LOOP

  /** HANDLE CLICKING LINKS **/
  const aElements = document.getElementsByTagName("a");
  // Checks for click on UL or anything bubbled from below
  ul.addEventListener("click", e => {
    const event = e.target;
    // Check for <a> elements
    if (event.tagName == "A") {
      for (let x = 0; x < aElements.length; x++) {
        aElements[x].className = ""; // Removes 'active' class from all <a> elements
      }
      event.className = "active"; // Class added to clicked <a>
      showPage(list, event.textContent); // Updates page based on click
    }
  }); //END_EVENTHANDLER
}; //END_FUNC

const search = () => {
  /** Creating Search Component **/

  // Select parent div w/ page-header class
  const parentDiv = document.getElementsByClassName("page-header")[0];
  // Create div with class student-search
  const div = document.createElement("div");
  div.className = "student-search";
  parentDiv.appendChild(div);
  // Create input and button under div
  const input = document.createElement("input");
  input.setAttribute("placeholder", "Search for students");
  div.appendChild(input);
  const button = document.createElement("button");
  button.textContent = "Search";
  div.appendChild(button);
  // Create H1 to for no Results
  const h1 = document.createElement("h1");

  /** Add functionality to Search Component **/
  const searchFunctionality = () => {
    // Get names from H3 element
    const namesArr = document.querySelectorAll(".student-item h3"); // Array of names
    // Get and trim search value
    const searchInput = input.value.toLowerCase().trim();
    // Create new array for search results
    let newArr = [];
    // H1 for no results
    h1.textContent = "";

    /** Check Search Input **/
    // 1. Empty Search
    if (searchInput.length == 0) {
      console.log("Input is empty");
      newArr = studentLIs; // Searching nothing results in normal list
    } else {
      // Not empty
      let match = false;
      for (let i = 0; i < namesArr.length; i++) {
        const currentName = namesArr[i].textContent.toLowerCase();
        // 2. Search Match
        if (currentName.includes(searchInput)) {
          match = true;
          newArr.push(namesArr[i].parentNode.parentNode); // Adding to new list
        }
      } //END_LOOP
      // 3. No Match
      if (match == false) {
        h1.textContent = "No results found";
        h1.style.textAlign = "center";
        parentDiv.parentNode.insertBefore(h1, parentDiv.nextSibling);
      }
    }
    /** Paginate Results **/
    // Clear Page
    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
      document.getElementsByTagName("li")[i].style.display = "none";
    }
    // Run Pagination Functions
    showPage(newArr, 1);
    appendPageLinks(newArr);
  };

  // Event Handlers for click events & keyup
  button.addEventListener("click", () => {
    searchFunctionality();
  });
  input.addEventListener("keyup", () => {
    searchFunctionality();
  });
}; //END_FUNC

/**
 * Invokes functions to show/hide LIs and to setup/handle pagination button click events
 **/
search(); // Sets up search box along with handling click event
showPage(studentLIs, 1); // Shows first 10 LIs, hiding the rest
appendPageLinks(studentLIs); // Sets up pagination buttons along with handling click events
