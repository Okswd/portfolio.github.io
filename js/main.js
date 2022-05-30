$(function(){
  $('.slider__box').slick({
    prevArrow:'<img class="slider__arrow slider__arrow-left" src="img/arrow-left.svg" alt="arrow-left">',
    nextArrow:'<img class="slider__arrow slider__arrow-right" src="img/arrow-right.svg" alt="arrow-right">',
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('active');
  });
});

