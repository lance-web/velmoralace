
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll(".faq-item").forEach(function(item){
    item.addEventListener("click", function(){ item.classList.toggle("open"); });
  });
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");
  if(hamburger && menu){
    hamburger.addEventListener("click", function(){ menu.classList.toggle("open"); });
    menu.querySelectorAll("a").forEach(function(a){ a.addEventListener("click", function(){ menu.classList.remove("open"); }); });
  }
});
