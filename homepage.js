document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-links ul li a");
  const tabContents = document.querySelectorAll(".main-section");
  document.querySelector(".main-header .nav-links").style.left = "-100%";
  const sections = document.querySelectorAll(".main-section");
  const navLinks = document.querySelector(".nav-links");

  function setActiveLink() {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionId = section.getAttribute("id");
      const sectionOffset = section.offsetTop - navLinks.offsetHeight;

      if (
        scrollPosition >= sectionOffset &&
        scrollPosition < sectionOffset + section.offsetHeight
      ) {
        tabs.forEach((tab) => tab.classList.remove("active-link"));
        document
          .getElementById(`${sectionId}-link`)
          .classList.add("active-link");
      }
    });
  }

  // Call setActiveLink initially
  setActiveLink();

  // Call setActiveLink on scroll
  window.addEventListener("scroll", setActiveLink);

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.getAttribute("id");
      tabs.forEach((tab) => tab.classList.remove("active-link"));
      tabContents.forEach((content) =>
        content.classList.remove("active-tab-content")
      );
      document.getElementById(target).classList.add("active-tab-content");
      this.classList.add("active-link");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const homeSection = document.getElementById("home");

  // Add active classes to the home link and section by default
  homeLink.classList.add("active-link");
  homeSection.classList.add("active-tab-content");

  // Rest of your event listeners for tab links...
});

const links = document.querySelectorAll(".nav-links ul li a");
const sections = document.querySelectorAll(".main-section");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href").substring(1);
    sections.forEach((section) => {
      section.classList.remove("active-tab-content");
    });
    document.getElementById(targetId).classList.add("active-tab-content");
  });
});

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute("href").substring(1);

    // Remove active class from all links and sections
    links.forEach((link) => {
      link.classList.remove("active-link");
    });
    sections.forEach((section) => {
      section.classList.remove("active-tab-content");
    });

    // Add active class to the clicked link and corresponding section
    link.classList.add("active-link");
    document.getElementById(targetId).classList.add("active-tab-content");
  });
});

function toggleNav() {
  const navLinks = document.querySelector(".main-header .nav-links");
  if (navLinks.style.left === "-100%") {
    navLinks.style.left = "0";
  } else {
    navLinks.style.left = "-100%";
  }
}

type =
  "text/javascript" >
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Collect the form data
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      // Prepare the EmailJS parameters
      var templateParams = {
        from_email: email,
        message: message,
      };

      // Send the email
      emailjs.send("service_ahhhzua", "template_ak4xpua", templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          document.getElementById("contact-form").reset(); // Clear the form
        },
        function (error) {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
    });

function openTab(event, tabName) {
  var i, tabcontent, tabtitle;

  // Hide all tab contents and remove the 'default-active-tab-title' class from all tab titles
  tabcontent = document.getElementsByClassName("about-tab-content")[0].children;
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active-tab-content");
  }

  // Remove the 'default-active-tab-title' class from all tab titles
  tabtitle = document.getElementsByClassName("tabtitle");
  for (i = 0; i < tabtitle.length; i++) {
    tabtitle[i].classList.remove("default-active-tab-title");
  }

  // Show the clicked tab content and add the 'default-active-tab-title' class to the clicked tab title
  document
    .getElementById(tabName.toLowerCase() + "-tab")
    .classList.add("active-tab-content");
  event.currentTarget.classList.add("default-active-tab-title");
}

// Function to animate skill bars and count percentages
function animateSkillBars() {
  var skillBars = document.querySelectorAll(".skill-bar-container");
  skillBars.forEach(function (skillBar) {
    var skill = skillBar.querySelector(".skill");
    var percentageText = skillBar.querySelector(".percentage");
    var targetPercentage = parseInt(percentageText.textContent);
    var counter = 0;
    var step = 1;

    var timer = setInterval(function () {
      if (counter < targetPercentage) {
        counter += step;
        percentageText.textContent = counter + "%";
        skill.style.width = counter + "%";
      } else {
        clearInterval(timer);
      }
    }, 20); // Adjust the interval for smoother animation
  });
}

// Function to load skills when the Skills tab is clicked
function loadSkills() {
  // Your logic to open the Skills tab
  animateSkillBars();
}

// Call animateSkillBars() when the page loads
window.addEventListener("load", animateSkillBars);

// Call loadSkills() when the Skills tab is clicked
document
  .querySelector(".default-active-tab-title")
  .addEventListener("click", loadSkills);

// Function to load skills when the About link is clicked
function loadSkillsOnAboutClick() {
  // Check if the About tab is clicked
  document.getElementById("about-link").addEventListener("click", function () {
    // Load the skills
    animateSkillBars();
  });
}

function loadSkillsOnAboutClick() {
  document.getElementById("about-link").addEventListener("click", function () {
    // Load the skills
    animateSkillBars();
  });
}

function scrollToContact() {
  var contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}

function expandImage(imageSrc) {
  var expandedImage = document.getElementById("expandedImage");
  var expandedImg = document.getElementById("expandedImg");
  expandedImg.src = imageSrc;
  expandedImage.style.display = "flex";
}

// Close the expanded image when clicking outside of it
window.onclick = function (event) {
  var expandedImage = document.getElementById("expandedImage");
  if (event.target == expandedImage) {
    expandedImage.style.display = "none";
  }
};

function closeExpandedImage() {
  var expandedImage = document.getElementById("expandedImage");
  expandedImage.style.display = "none";
}

// Function to toggle the display of .sec-row when the button is clicked
function viewButton() {
  var button = document.getElementById("myBtn");
  var secRow = document.querySelector(".sec-row");
  var secRowDisplayStyle = window
    .getComputedStyle(secRow)
    .getPropertyValue("display");

  if (secRowDisplayStyle === "none") {
    // Show the content
    secRow.style.display = "flex";
    // Change button text and style
    button.textContent = "View less";
    button.style.backgroundColor = "rgb(26, 26, 26)";
  } else {
    // Hide the content
    secRow.style.display = "none";
    // Change button text and style
    button.textContent = "View more";
    button.style.backgroundColor = "#3593ff";
  }
}
