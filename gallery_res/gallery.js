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
    $('.mask2').on('click', function() {
        c++;
        if((c%2)!==0){
          $('#aboutArea').css('filter', 'blur(4px)').css('transform','scale(1.01)');
            $('#gallerymob').css('filter', 'blur(4px)').css('transform','scale(1.01)');
          }
        if(c%2===0){
          
            $('#aboutArea').css('filter', '').css('transform','scale(1)');
            $('#gallerymob').css('filter', '').css('transform','scale(1)');
        
        } });

        //slideshow style interval
var autoSwap = setInterval( swap,3500);

//pause slideshow and reinstantiate on mouseout
$('ul, span').hover(
  function () {
    clearInterval(autoSwap);
}, 
  function () {
   autoSwap = setInterval( swap,3500);
});

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel li.items').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('li.items').each(function(index) {
    items[index] = $(this).text();
});

//swap images function
function swap(action) {
  var direction = action;
  
  //moving carousel backwards
  if(direction == 'counter-clockwise') {
    var leftitem = $('.left-pos').attr('id') - 1;
    if(leftitem == 0) {
      leftitem = itemCount;
    }
    
    $('.right-pos').removeClass('right-pos').addClass('back-pos');
    $('.main-pos').removeClass('main-pos').addClass('right-pos');
    $('.left-pos').removeClass('left-pos').addClass('main-pos');
    $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
    
    startItem--;
    if(startItem < 1) {
      startItem = itemCount;
    }
  }
  
  //moving carousel forward
  if(direction == 'clockwise' || direction == '' || direction == null ) {
    function pos(positionvalue) {
      if(positionvalue != 'leftposition') {
        //increment image list id
        position++;
        
        //if final result is greater than image count, reset position.
        if((startItem+position) > resetCount) {
          position = 1-startItem;
        }
      }
    
      //setting the left positioned item
      if(positionvalue == 'leftposition') {
        //left positioned image should always be one left than main positioned image.
        position = startItem - 1;
      
        //reset last image in list to left position if first image is in main position
        if(position < 1) {
          position = itemCount;
        }
      }
   
      return position;
    }  
  
   $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
   $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
   $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
   $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

    startItem++;
    position=0;
    if(startItem > itemCount) {
      startItem = 1;
    }
  }
}

//next button click function
$('#next').click(function() {
  swap('clockwise');
});

//prev button click function
$('#prev').click(function() {
  swap('counter-clockwise');
});

//if any visible items are clicked
$('li').click(function() {
  if($(this).attr('class') == 'items left-pos') {
     swap('counter-clockwise'); 
  }
  else {
    swap('clockwise'); 
  }
});



  
   
  
  });
    
    

