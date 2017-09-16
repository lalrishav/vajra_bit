$(document).ready(function() {
    
      var active1 = false;
      var active2 = false;
      var active3 = false;
      var active4 = false;
      var active5 = false;
    let c= 0;
    
        $('.topleftMenu').on('click', function() {
        
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
        $('.flip-container1').delay(2800).queue(function(){
            $(this).addClass('flipped')
        });
      $('.mask2').on('click', function() {
        c++;
        if((c%2)!==0){
          $('#contactArea').css('filter', 'blur(4px)');
            $('#contactAreaMob').css('filter', 'blur(4px)');
          }
        if(c%2===0){
          
            $('#contactArea').css('filter', '');
            $('#contactAreaMob').css('filter', '');
        
        }
      });
    });

