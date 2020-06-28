var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
 
button.addEventListener('click', function(){
    modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});

$('h2').click(function(){
    console.log('Ты кликнул по заголовку!');
});

$('#brif-form').validate({
  rules: {
    username: "required",
    phone: "required",
  },
  messages: {
    username: "Укажите имя",
    phone: "Нам нужен ваш телефон",
  }
});

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 900,
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
});