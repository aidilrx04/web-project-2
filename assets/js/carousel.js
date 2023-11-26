$(document).ready(function () {
  var currentIndex = 0;
  var items = $(".slide");
  var totalItems = items.length;

  $(".next").on("click", function () {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  $(".prev").on("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 1;
    }
    updateCarousel();
  });

  function updateCarousel() {
    var newTransformValue = -currentIndex * 100 + "%";
    $(".carousel-container").css(
      "transform",
      "translateX(" + newTransformValue + ")"
    );
  }
});
