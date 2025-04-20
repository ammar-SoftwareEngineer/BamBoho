// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })
var owl = $('.hero');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:15,
    autoplay:true,
    nav:true,
    dots:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

var owl = $('.product');

owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  lazyLoad:true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      
    },
    600: {
      items: 2,
      nav: false,
      dots: true // لا تظهر dots هنا أيضاً
    },
    992: {
      items: 3,
      nav: true,
      dots: true // تظهر dots في الشاشات الكبيرة فقط
    },
    1200: {
      items: 4,
      nav: false,
      dots: true 
    }
  }
});

// التحكم بالتشغيل والإيقاف
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000]);
});
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay');
});



const navbar = document.querySelector(".navbar");
const dropdowns = document.querySelectorAll(".nav-item.dropdown");

dropdowns.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    navbar.style.height = "60%";
  });

  item.addEventListener("mouseleave", () => {
    navbar.style.height = "100px"; 
  });
});

