$(document).ready(function() {
    
      var active1 = false;
      var active2 = false;
      var active3 = false;
      var active4 = false;
      var active5 = false;
    
        $('.parent2').on('click', function() {
        
        if (!active1) $(this).find('.menu1').css({'background-color': '#fbcfie', 'transform': 'translate(0px,130px)'});
        else $(this).find('.menu1').css({'background-color': '#fbcf1e', 'transform': 'none'}); 
         if (!active2) $(this).find('.menu2').css({'background-color': '#fbcf1e', 'transform': 'translate(65px,110px)'});
        else $(this).find('.menu2').css({'background-color': '#fbcf1e', 'transform': 'none'});
          if (!active3) $(this).find('.menu3').css({'background-color': '#fbcf1e', 'transform': 'translate(115px,65px)'});
        else $(this).find('.menu3').css({'background-color': '#fbcf1e', 'transform': 'none'});
          if (!active4) $(this).find('.menu4').css({'background-color': '#fbcf1e', 'transform': 'translate(130px,0px)'});
        else $(this).find('.menu4').css({'background-color': '#fbcf1e', 'transform': 'none'});
        if (!active5) $(this).find('.menu5').css({'background-color': '#fbcf1e', 'transform': 'translate(49px,45px)'});
        else $(this).find('.menu5').css({'background-color': '#fbcf1e', 'transform': 'none'});
        active1 = !active1;
        active2 = !active2;
        active3 = !active3;
        active4 = !active4;
        active5 = !active5;
          
        });
    });

    $('.flip-container1').delay(2800).queue(function(){
        $(this).addClass('flipped')
    });

    function afterReveal (el) {
      el.addEventListener('animationend', function () {
        $('flip-container2').addClass('flipped');
      });
    }

    new WOW({ callback: afterReveal }).init();
     
    function cycleImages(){
      var $active = $('.flip-container2 .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('.flip-container2 img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

$(document).ready(function(){
setInterval('cycleImages()', 2000);
})


   

   
      
      
    

      
      