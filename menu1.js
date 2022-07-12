$('#carouselMenuCards').carousel({
    interval: 1000
  })
  
  $('.carousel .carousel-item').each(function(){
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
  
$('#newsCarousel').carousel({
    interval: 1000
});

$('#clock-b').countdown('2021/1/1').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="holder m-2"><span class="h1 font-weight-bold">%D</span> Day%!d</div>'
    + '<div class="holder m-2"><span class="h1 font-weight-bold">%H</span> Hr</div>'
    + '<div class="holder m-2"><span class="h1 font-weight-bold">%M</span> Min</div>'
    + '<div class="holder m-2"><span class="h1 font-weight-bold">%S</span> Sec</div>'));
});

$('#gallery').carousel({
  interval: 1000
});
  