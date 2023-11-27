$(document).ready(function () {
  $("#main-carousel").slick({
    easing: "ease-in-out",
    prevArrow: `<button class="prev"><i class="ph ph-caret-left"></i></button>`,
    nextArrow: `<button class="next"><i class="ph ph-caret-right"></i></button>`,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  });
});
