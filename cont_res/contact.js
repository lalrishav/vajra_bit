$(document).ready(function() {
  
    var active1 = false;
    var active2 = false;
    var active3 = false;
    var active4 = false;
    var active5 = false;
    var active6 = false;
    let c = 0;
  
      $('.topLeftMenu').on('click', function() {
      
      if (!active1) $(this).find('.menu1').css({'background-color': '#fbcfie', 'transform': 'translate(-20px,135px)'});
      else $(this).find('.menu1').css({'background-color': '#fbcf1e', 'transform': 'none'}); 
       if (!active2) $(this).find('.menu2').css({'background-color': '#fbcf1e', 'transform': 'translate(45px,125px)'});
      else $(this).find('.menu2').css({'background-color': '#fbcf1e', 'transform': 'none'});
        if (!active3) $(this).find('.menu3').css({'background-color': '#fbcf1e', 'transform': 'translate(103px,100px)'});
      else $(this).find('.menu3').css({'background-color': '#fbcf1e', 'transform': 'none'});
        if (!active4) $(this).find('.menu4').css({'background-color': '#fbcf1e', 'transform': 'translate(145px,-23px)'});
      else $(this).find('.menu4').css({'background-color': '#fbcf1e', 'transform': 'none'});
      if (!active5) $(this).find('.menu5').css({'background-color': '#fbcf1e', 'transform': 'translate(60px,48px)'});
      else $(this).find('.menu5').css({'background-color': '#fbcf1e', 'transform': 'none'});
      if (!active6) $(this).find('.menu6').css({'background-color': '#fbcf1e', 'transform': 'translate(133px,40px)'});
      else $(this).find('.menu6').css({'background-color': '#fbcf1e', 'transform': 'none'});
      active1 = !active1;
      active2 = !active2;
      active3 = !active3;
      active4 = !active4;
      active5 = !active5;
      active6 = !active6;
        
      });
        $('.flip-container1').delay(2800).queue(function(){
            $(this).addClass('flipped')
        });
      $('.mask2').on('click', function() {
        c++;
        if((c%2)!==0){
          $('#contactArea').css('filter', 'blur(4px)').css('transform','scale(1.01)');
            $('#contactAreaMob').css('filter', 'blur(4px)').css('transform','scale(1.01)');
          }
        if(c%2===0){
          
            $('#contactArea').css('filter', '').css('transform','scale(1)');
            $('#contactAreaMob').css('filter', '').css('transform','scale(1)');
        
        }
      });
    
    console.log(window.innerHeight);
    
//    if(window.innerWidth > window.innerHeight){
//        alert("GHUMAAA!!!!");
//    }
    
  if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) )
{
    if(window.innerWidth > window.innerHeight){
       alert("Please switch to potrait")
    }
}
    });

