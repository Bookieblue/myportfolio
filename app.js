// Dark/light mode toggle
var icon = document.getElementById("icon");
var img = document.getElementById("img");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    // img.src = "./Assets/images/lightmode-bg2.png";
  } else {
    // img.src = "./Assets/images/me.png";
  }
};

//NavToggle
var nav = document.querySelector('.nav-center');
var navOpen =document.querySelector('.fa.fa-bars');
var navClose =document.querySelector('.fa.fa-times');

navOpen.addEventListener('click', ()=>{
    nav.classList.add('show-nav');
    navClose.style.display = "block";
});

navClose.addEventListener('click', ()=>{
    nav.classList.remove('show-nav');
});



// To show/hide sections starts here----------
var links = document.querySelectorAll(".link");
var sections = document.querySelectorAll("#section");
var homeSection = document.querySelector(".home");

links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    sections.forEach((section) => {
      section.style.display = "none";

    });
    links[index].classList.add("active");
    sections[index].style.display = "block";
    homeSection.classList.remove("home");
    homeSection.classList.add("home-view2");
    nav.classList.remove("show-nav");
    navClose.style.display = "none";
    navOpen.style.display = "block";
    document.body.style.backgroundImage = 'none';
    e.preventDefault();
  });
});


//modal
// Geting all elements with class "view-details"
document.addEventListener('DOMContentLoaded', function () {
    const viewDetailsLinks = document.querySelectorAll('.view-details');

    viewDetailsLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Get the target modal ID from the data attribute
            const targetModalId = this.getAttribute('data-target');

            // Get the modal element
            const modal = document.getElementById(targetModalId);

             // Disable body scroll when the modal is open
             document.body.style.overflow = 'hidden';

            // Display the modal
            modal.style.display = 'block';

            // Add an event listener to close the modal when the close button is clicked
            const closeModal = modal.querySelector('.close');
            closeModal.addEventListener('click', function () {
                // Enable body scroll when the modal is closed
                document.body.style.overflow = 'auto';
                modal.style.display = 'none';
            });
        });
    });
});


