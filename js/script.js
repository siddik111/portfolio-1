// ****************fixd nevbar start*******************



// ****************fixd nevbar end*******************

// ****************type js start*******************

var typed = new Typed('.type', {
  strings: [
    ' _DESIGENER',
    ' DEVLOPER',
  ],
  typeSpeed: 150,
  backSpeed: 100,
  loop:true,
});

// ****************type js end*******************

// ****************counter js start*******************

$('.counter').counterUp();
var mixer = mixitup('.content');

// ****************counter js end*******************
// ****************portfolio slaider start*******************

$('.slider').slick({
  dots: false,
  infinite:true,
  speed: 300,
  slidesToShow: 2,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    // prevArrows:'<i class="fa-solid fa-angle-right"></i>',
    // nextArrows:'<i class="fa-solid fa-angle-right"></i>',

    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  // ****************portfolio slaider end*******************

  // ****************brandslaider start*******************
  
  $('.brand').slick({
    dots: false,
    infinite:true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:800,
    arrows:false,
    // prevArrows:'<i class="fa-solid fa-angle-right"></i>',
    // nextArrows:'<i class="fa-solid fa-angle-right"></i>',

    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

    // ****************brandslaider end*******************



