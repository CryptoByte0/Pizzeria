
$('.gallary__slider__wraper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  variableWidth: true,
  dots: false,
  prevArrow: false,
  nextArrow: false
});

$(function(){
  $('.menu__btn').on('click', ()=>{
		$('.menu__items').slideToggle();
  });
});

