const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const Links = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", ()=> {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("active");
Links.forEach((link,index)=>{
    // link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
    if(link.style.animation){
        link.style.animation = '';
    }
    else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
})
});


Links.forEach((link, index) => link.addEventListener("click", ()=>{
    navLinks.classList.remove("nav-active");
    burger.classList.remove("active");
    if(link.style.animation){
        link.style.animation = '';
    }
    else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
}));


// change main image
function imgSlider(value){
    document.querySelector(".mainimage").src = value;
}
