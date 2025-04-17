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
var owl = $('.owl-carousel');
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
})


const navbar = document.querySelector(".navbar");
const dropdowns = document.querySelectorAll(".nav-item.dropdown");

dropdowns.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    navbar.style.height = "60%"; // أو أي ارتفاع يناسب القائمة
  });

  item.addEventListener("mouseleave", () => {
    navbar.style.height = "100px"; // يرجع للارتفاع الأساسي
  });
});

