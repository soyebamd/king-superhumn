const cardMedia = document.querySelectorAll(".video-block");

cardMedia.forEach((VD, index) => {
  const videoElem = document.querySelectorAll(".controlVd");

  VD.addEventListener("mouseenter", function () {
    // console.log(videoElem[index]);
    videoElem[index].play();
  });

  VD.addEventListener("mouseout", function () {
    // console.log(videoElem[index]);
    // console.log(this);
    videoElem[index].pause();
  });
});

jQuery(function ($) {
  $(".text-scroller-items").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 6000,
    dots: false,
    arrows: false,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnFocus: false,
    pauseOnHover: true,
  });
});
