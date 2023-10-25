
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


//form
const form =document.querySelector('form');
statusTxt = form.querySelector('.btn-con span');


form.onsubmit =(e)=>{
    e.preventDefault();
    statusTxt.style.display = "block";
    statusTxt.style.color= "#0D6EFD" ;
    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "contact.php", true); //sending post request to contact.php file
    xhr.onload = () =>{ //once ajax loaded
          if (xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
         if (response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address!") || response.indexOf("sorry, failed to send your message!"))  {
            statusTxt.style.color= "pink" ;
         }
         else{
            form.reset();
            setTimeout(()=>{
                statusTxt.style.display = "none";
            }, 3000);
         }
            statusTxt.innerText = response;
          }
    }
    let formData = new FormData(form);
    xhr.send(formData); //sending form data
}

























      

  
  