document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("homeButton").addEventListener("click", function () {
    showSection("homeSection");
    setActiveButton("homeButton");
  });

  document
    .getElementById("membersButton")
    .addEventListener("click", function () {
      showSection("membersSection");
      setActiveButton("membersButton");
    });

  document
    .getElementById("happyDayButton")
    .addEventListener("click", function () {
      showSection("happyDaySection");
      setActiveButton("happyDayButton");
    });

  const rectangle = document.getElementById("rectangle");
  const hiddenContent = document.getElementById("hiddenContent");

  rectangle.addEventListener("click", function () {
    if (hiddenContent.style.display === "block") {
      hiddenContent.style.display = "none";
    } else {
      hiddenContent.style.display = "block";
    }
  });

  hiddenContent.addEventListener("click", function () {
    hiddenContent.style.display = "none";
  });

  rectangle.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  hiddenContent.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.remove("show");
  });
  document.getElementById(sectionId).classList.add("show");
}

function setActiveButton(buttonId) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  document.getElementById(buttonId).classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
  // Initially hide the hidden content
  document.getElementById("hiddenContent").style.display = "none";

  // Add event listener for image click
  document.getElementById("image").addEventListener("click", function () {
    var hiddenContent = document.getElementById("hiddenContent");
    if (hiddenContent.style.display === "block") {
      hiddenContent.style.display = "none";
    } else {
      hiddenContent.style.display = "block";
    }
  });

  // Add event listeners for button clicks
  document.getElementById("homeButton").addEventListener("click", function () {
    showSection("homeSection");
    setActiveButton("homeButton");
  });

  document
    .getElementById("membersButton")
    .addEventListener("click", function () {
      showSection("membersSection");
      setActiveButton("membersButton");
    });

  document
    .getElementById("happyDayButton")
    .addEventListener("click", function () {
      showSection("happyDaySection");
      setActiveButton("happyDayButton");
    });
});

// Function to show the selected section
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.remove("show");
  });
  document.getElementById(sectionId).classList.add("show");
}

// Function to set the active button
function setActiveButton(buttonId) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  document.getElementById(buttonId).classList.add("active");
}
