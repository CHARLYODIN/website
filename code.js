const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "cerrar menu");
  } else {
    navToggle.setAttribute("aria-label", "abrir menu");
  }
})

const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function() {
    navMenu.classList.toggle("nav-menu_visible")
  })
});

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__lista'), {
   slidesToShow: 1,
   slidesToScroll: 1,
   dots: '.carousel__indicador',
   arrows: {
     prev: '.carousel__anterior',
     next: '.carousel__siguiente'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: '2',
        slidesToScroll: '2',
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
  });
});