$(function () {
  $('.menu__burger').on('click', function () {
    $('.menu__items').toggleClass('active');
    $('.menu__burger').toggleClass('menu__burger--active');
    $('body').toggleClass('lock');
  });

  $('.slider__inner').slick({
    arrows: false,
    dots: true
  });

  mixitup('.products__items');
  mixitup('.design__items');


  $('.carousel__items').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
})