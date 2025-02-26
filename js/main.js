$(function(){
  $('.design__slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="Влево">',
    nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="Вправо">'
  });
});