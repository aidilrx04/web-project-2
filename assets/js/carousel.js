$(document).ready(function () {
  let pages = $('[data-role="page"]');

  console.log(pages);

  $(document).on("pagechange", function () {
    console.log("page changed :(");
    initializeSlick();
  });

  $(`[data-role="page"]`).on("pagechange", function () {
    console.log("pagechange");
  });

  initializeSlick();
  function initializeSlick() {
    $(document).ready(function () {
      console.log("initializing slick");
      try {
        let c = $(".carousel");

        c.each(function () {
          setTimeout(() => {
            $(this).slick({
              easing: "ease-in-out",
              prevArrow: `<button class="prev"><i class="ph ph-caret-left"></i></button>`,
              nextArrow: `<button class="next"><i class="ph ph-caret-right"></i></button>`,
              autoplay: true,
              autoplaySpeed: 5000,
              pauseOnHover: true,
            });
          }, 1);
        });
      } catch (e) {
        console.error("Error while creating slick");
        console.error(e);
      }
    });
  }
});
