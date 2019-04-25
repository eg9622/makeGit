
 $(Document).ready(function(){
     
     $('.gnb li').on('click',function(){
         let gnbLi=$(this).index();
        
         $('.gnbIn').eq(gnbLi).toggleClass('on').siblings().removeClass('on');
                    
     });//.gnb li.click
     
     $('.slider').bxSlider({
         auto:true,
         speed:2000,
         mode:'fade',
        'prevText':'',
        'nextText':'',
        'pagerCustom':'.pager'
     });//bxSlider
     
     
     scrolly();
     
     $(window).on('scroll',function(){
         var sOfs=$('.service').offset().top;
         var scr=$(window).scrollTop();
         
         if(scr>=sOfs){
             $('.top').addClass('on');
         }else{
             $('.top').removeClass('on');
         }
         
     });
     
     $('.top').on('click',function(){
         var hOfs=$('header').offset().top;
         $('html, body').animate({
             scrollTop:hOfs
         },500)
     })
     
 });//opening