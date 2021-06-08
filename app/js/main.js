$(function() {
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  $('.burger').on('click', function() {
    $('.menu__items').toggleClass('active');
    $('.burger').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.slider__inner').slick({
    arrows: false,
    dots: true
  });

  $('.carousel__items').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
})