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
    // Clear the list
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

// Function to display the popup with the recommended yoga plan
function showPopup() {
  // Retrieve the selected values from the dropdowns
  const ActionType = document.querySelector(
    'select[name="ActionType"]'
  ).value;
  const Duration = document.querySelector(
    'select[name="Duration"]'
  ).value;
  const Difficulty = document.querySelector(
    'select[name="Difficulty"]'
  ).value;

  // Data object containing the details of each yoga plan
  const data = {
    11: {
      name: "Gentle Stretch Yoga",
      describe:
        "The class focuses on gentle stretching and relaxation, using simple poses and deep breathing to reduce tension and stress</br>Suitable for beginners and helps increase body flexibility and comfort",
    },
    21: {
      name: "Foundational Strength & Balance Yoga",
      describe:
        "This class is designed to build foundational strength and stability in the body through basic strength and balance poses</br>Suitable for beginners",
    },
    31: {
      name: "Beginners' Vitality Yoga",
      describe:
        "Help beginners rejuvenate and reduce fatigue and stress through basic rejuvenating poses and breathing exercises",
    },
    12: {
      name: "Intermediate Stretch & Relaxation Yoga",
      describe:
        "Suitable for practitioners with a certain foundation, it includes more in-depth stretching and relaxation poses to help further improve flexibility and reduce stress",
    },
    22: {
      name: "Intermediate Strength & Balance Yoga",
      describe:
        "A combination of intermediate strength and balance poses designed to further improve the body's strength and stability",
    },
    32: {
      name: "Intermediate Vitality Yoga",
      describe:
        "Help practitioners regain more vitality and balance energy through more complex restorative poses and breathing exercises",
    },
    13: {
      name: "Deep Stretch & Relaxation Yoga",
      describe:
        "This advanced class combines deep stretching and advanced relaxation techniques to further enhance flexibility and release deep tension<br/>Suitable for practitioners who already have a certain foundation",
    },
    23: {
      name: "Advanced Strength & Balance Yoga",
      describe:
        "Advanced classes include more challenging poses to further improve strength, balance and stability<br/>Suitable for experienced practitioners",
    },
    33: {
      name: "Advanced Vitality Yoga",
      describe:
        "Advanced classes combine complex restorative poses and breathing techniques designed to deeply rejuvenate and balance energy<br/>Suitable for experienced practitioners",
    },
  };
   
  // Retrieve the corresponding yoga plan from the data object
  const yoga = data[ActionType + "" + Difficulty];

  // Update the popup content with the selected yoga plan details
  document.querySelector(".texts .text1").innerHTML = yoga.name;
  document.querySelector(".texts .text2").innerHTML = yoga.describe;
  document.querySelector(".texts .difficulty").style.width = Difficulty * 36 + 'px';
  document.querySelector(".texts .duration").innerHTML = Duration;

  // Display the popup
  document.querySelector(".popup-container").style.display = "block";
}

// Function to hide the popup
function hidePopup() {
  document.querySelector(".popup-container").style.display = "none";
}

// Function to add a new plan to the list
function addmake() {
  // Hide the popup
  document.querySelector(".popup-container").style.display = "none";

  // Create a new plan object with the current time
  const plan = {
    name: document.querySelector(".popup .text1").innerHTML,
    time: new Date().toLocaleString(),
  };

  // Check if the plan already exists in the list
  for (const savePlan of list) {
    if (savePlan.name == plan.name) {
      alert("Already Existed");
      return;
    }
  }

  // Add the new plan to the list
  list.push(plan);

  // Save the updated list to localStorage
  localStorage.setItem("plans", JSON.stringify(list));

  // Switch to the 'list' page to display the updated list
  choice("list");
}

// Function to delete a plan from the list
function deletePlan(event) {
  // Iterate through the list of plans
  for (const savePlan of list) {
    // Find the plan that matches the one to be deleted
    if (
      savePlan.name ==
      event.target.parentElement.querySelector(".text").innerHTML
    ) {
      // Remove the plan from the list
      list.splice(list.indexOf(savePlan), 1);

      // Remove the plan's HTML element from the page
      event.target.parentElement.remove();
    }
  }

  // Save the updated list to localStorage
  localStorage.setItem("plans", JSON.stringify(list));
}