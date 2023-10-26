
// Dark/light mode toggle
var icon = document.getElementById("icon");
var img =document.getElementById("img")
icon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        img.src="./Assets/images/lightmode-bg2.png"
    }
    else{
      img.src="./Assets/images/me.png"
    }
}



//NavToggle
var nav = document.querySelector('.nav-center');
var navOpen =document.querySelector('.fa.fa-bars');
var navClose =document.querySelector('.fa.fa-times')

navOpen.addEventListener('click', ()=>{
    nav.classList.add('show-nav');
    navOpen.classList.remove('active');
    navClose.classList.add("active")
});
navClose.addEventListener('click', ()=>{
    nav.classList.remove('show-nav');
    navOpen.classList.add('active');
    navClose.classList.remove("active")
});






// To show/hide sections starts here------------------------
var links = document.querySelectorAll('.link');
var sections = document.querySelectorAll('#section');
var homeSection = document.querySelector('.home');

links.forEach((link, index) => {
    link.addEventListener('click', (e)=>{

        links.forEach((link)=>{
        link.classList.remove('active');
       });
       sections.forEach((section) =>{
       section.style.display = 'none';
       });
       links[index].classList.add('active');
       sections[index].style.display = 'block';
       homeSection.classList.remove("home");
       homeSection.classList.add("home-view2");
       e.preventDefault();
    });
});

// slider navigation
const prevButton = document.querySelector('.fa.fa-chevron-left');
const nextButton = document.querySelector('.fa.fa-chevron-right');


























      

  
  