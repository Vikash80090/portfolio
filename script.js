var h = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    if(window.scrollY>90){
        h.classList.add('nav-scrolled')
    }
    else if(window.scrollY<=90){
        h.classList.remove('nav-scrolled')
    }
})
var liborder = document.querySelectorAll('.list-link')
liborder.forEach(navactive =>{
    navactive.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active')
        navactive.classList.add('active')
    })
})
function navshow() {
    document.querySelector('ul').style.top="0px";
    document.querySelector('.close-menu').style.display="block";
    document.querySelector('.open-menu').style.display="none";
}
function closemenu() {
    document.querySelector('ul').style.top="-440px";
    document.querySelector('.close-menu').style.display="none";
    document.querySelector('.open-menu').style.display="block";
}
