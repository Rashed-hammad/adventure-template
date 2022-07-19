let btn = document.querySelector(".menu");
let menu = document.querySelector(".header ul");
let active =false;

btn.onclick = function (){
    if(active === false){
    menu.style.display = "block";
    active = true;
    }
    else{
        menu.style.display = "none";
        active = false;
    }

}
let up =document.querySelector(".arrow a");
window.onscroll = function (){
    if(window.scrollY >= 600){
    up.style.display = "block";
    }
    else{
    up.style.display = "none";
    }
}
