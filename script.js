let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', function() {
  const homeLink = document.getElementById('home-link');
  const home = document.getElementById('home');

  homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    home.classList.toggle('hidden');

  home.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const courseLink = document.querySelector(".course-link");

  courseLink.addEventListener("click", function(event) {
      event.preventDefault();
      const courseSection = document.getElementById("course");
      courseSection.scrollIntoView({ behavior: "smooth" });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const coursesSection = document.getElementById("courses");
  const coursesDropdown = coursesSection.querySelector(".courses-dropdown");
  const selectCourseBtn = coursesDropdown.querySelector("#select-course-btn");

  coursesSection.addEventListener("click", function() {
      coursesDropdown.classList.toggle("hidden");
  });

  selectCourseBtn.addEventListener("click", function() {
      const selectedCourse = coursesDropdown.querySelector("#course-select").value;
      console.log("Selected course:", selectedCourse);
      
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const courseSlider = document.querySelector(".course-slider");
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");


  prevArrow.addEventListener("click", scrollLeft);
  nextArrow.addEventListener("click", scrollRight);


  positionArrows();


  courseSlider.addEventListener("scroll", positionArrows);
  window.addEventListener("resize", positionArrows);

  function positionArrows() {
      const contentWidth = courseSlider.scrollWidth;

      const atStart = courseSlider.scrollLeft === 0;
      const atEnd = courseSlider.scrollLeft + courseSlider.clientWidth >= contentWidth;

      prevArrow.style.display = atStart ? "none" : "block";
      nextArrow.style.display = atEnd ? "none" : "block";
  }

  function scrollLeft() {
      courseSlider.scrollBy({ left: -200, behavior: 'smooth' });
  }

  function scrollRight() {
      courseSlider.scrollBy({ left: 200, behavior: 'smooth' });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const courseSlides = document.querySelectorAll(".r-slide");
  let currentForm = null;

 
  courseSlides.forEach(function(slide) {
      const courseSelectionForm = slide.querySelector(".course-selection-form");

      slide.addEventListener("click", function() {
          if (currentForm !== null && currentForm !== courseSelectionForm) {
              currentForm.classList.add("hidden");
          }
          courseSelectionForm.classList.toggle("hidden");
          currentForm = courseSelectionForm;
      });

    
      const courseSelectionFormSubmit = courseSelectionForm.querySelector("form");
      courseSelectionFormSubmit.addEventListener("submit", function(event) {
          event.preventDefault();
          const selectedCourse = courseSelectionFormSubmit.querySelector("input[name='course']:checked").value;
          console.log("Selected course:", selectedCourse);
          courseSelectionForm.classList.add("hidden");
          currentForm = null; 
      });
  });
});
















document.addEventListener('DOMContentLoaded', function() {
  const contactLink = document.getElementById('contact-link');
  const contactForm = document.getElementById('contact-form');

  contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    contactForm.classList.toggle('hidden');

  contactForm.scrollIntoView({ behavior: 'smooth' });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const loginLink = document.getElementById('login-link');
  const loginForm = document.getElementById('login-form');

  loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.classList.toggle('hidden');

    loginForm.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  const showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
  const passwordInput = document.getElementById("password");

  showPasswordCheckbox.addEventListener("change", function() {
    console.log("Checkbox change event triggered");
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const registerLink = document.querySelector('.additional-links a[href="#register"]');
  const registrationForm = document.getElementById('registration-form');

  registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    registrationForm.classList.toggle('hidden');
  });
});



