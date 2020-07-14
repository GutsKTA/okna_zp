// Sticky menu background
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("main-nav-white");
  } else {
    $("nav").removeClass("main-nav-white");
  }
});

// Smooth Scrolling
$("#main-nav a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top - 82,
    });
  }
});
