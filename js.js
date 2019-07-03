(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    initialSlide: 2,
    slidesPerView: 4,
    spaceBetween: 36,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 5,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
  
    },
      
  })
  var count = 0,
      button = document.querySelector('.s1');
  // if(display === "undefined"){
  //   alert('Спасибо за подписку')
  //   $('.text_button').
  // }
  button.addEventListener('click', function() {
    var display = document.querySelector('.text_button');
    if(display){
      count++;
      display.innerHTML = count;
    } else{
      var element = document.createElement('span');
      var parentDiv = button.parentNode;

      // Вставляем sp1 перед sp2
      parentDiv.insertBefore(element, button);
      count++;
      element.classList.add('text_button');
      
      element.innerHTML = count;
    }
  })
      
      


}())

