// navbar
$(document).ready(function() {
    $('#navbar-toggler').click(function() {
      $('#navbar-menu').toggleClass('active');
    });
//   carousel
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;
  
    function showItem(index) {
      items.removeClass('active').eq(index).addClass('active');
      const transformValue = `translateX(-${index * 100}%)`;
      $('.carousel-inner').css('transform', transformValue);
    }
  
    $('.next').click(function() {
      currentIndex = (currentIndex + 1) % itemCount;
      showItem(currentIndex);
    });
  
    $('.prev').click(function() {
      currentIndex = (currentIndex - 1 + itemCount) % itemCount;
      showItem(currentIndex);
    });
  
 
  });
  