// Retrieve the saved plans from localStorage or initialize an empty array if no plans exist
const list = JSON.parse(localStorage.getItem("plans") || "[]");

// Function to switch between different pages
function choice(page) {
  // Hide all pages
  document.querySelector(".home").style.display = "none";
  document.querySelector(".make").style.display = "none";
  document.querySelector(".list").style.display = "none";

  // Remove the 'selected' class from all buttons
  document.querySelector("#button-home").className = "";
  document.querySelector("#button-make").className = "";
  document.querySelector("#button-list").className = "";

  // Display the selected page
  document.querySelector("." + page).style.display = "block";

  // Add the 'selected' class to the corresponding button
  document.querySelector("#button-" + page).className = "selected";

  // If the 'list' page is selected, populate it with the plans
  if (page == "list") {
    // Clear the current list
    document.querySelector(".list .container").innerHTML = "";

    // Iterate through the list of plans and add each plan to the list container
    for (const plan of list) {
      document.querySelector(".list .container").innerHTML +=
        '<div class="plan"><div class="text">' +
        plan.name +
        '</div><div class="time">' +
        plan.time +
        '</div><img onclick="deletePlan(event)" class="delete" src="images/delete.png"></div>';
    }
  }
}
