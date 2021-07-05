const btnHamburguer = document.getElementById("btn-hamburger");
const mobileMenu = document.getElementById("mobile-menu");

btnHamburguer.addEventListener("click", () => {  
  if(mobileMenu.classList.contains("not-active")){
    mobileMenu.classList.remove("not-active");
    btnHamburguer.classList.add("opacity");
  }else{
    mobileMenu.classList.add("not-active");
    btnHamburguer.classList.remove("opacity");
  }
});