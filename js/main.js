
var owl = $(".hero");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 15,
  autoplay: true,
  nav: true,
  dots: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

var owl = $(".product");

owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  lazyLoad: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
      dots: true, // لا تظهر dots هنا أيضاً
    },
    992: {
      items: 3,
      nav: true,
      dots: true, // تظهر dots في الشاشات الكبيرة فقط
    },
    1200: {
      items: 3,
      nav: false,
      dots: true,
    },
  },
});

// التحكم بالتشغيل والإيقاف
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});


  $(document).ready(function () {
    $(".testimonials").owlCarousel({
      items: 1,
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: [
        '<i class="fas fa-chevron-left arrow-left"></i>',
        '<i class="fas fa-chevron-right  arrow-right"></i>'
      ]
    });
  });




let imageURL = "";

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      imageURL = URL.createObjectURL(file);
      const img = document.getElementById("preview");
      img.src = imageURL;
      img.classList.remove("d-none");
    }
  });


  // 
  let targetNumber = 100; // الرقم النهائي
    let current = 0;
    let speed = 20; // السرعة بالمللي ثانية

    function autoCount() {
      const counter = document.getElementById("counter");
      const interval = setInterval(() => {
        current++;
        counter.textContent = current;

        if (current >= targetNumber) {
          clearInterval(interval); // إيقاف العداد عند الوصول للهدف
        }
      }, speed);
    }

    // تشغيل العداد تلقائيًا عند تحميل الصفحة
    window.onload = autoCount;