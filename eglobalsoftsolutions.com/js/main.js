$(document).on('ready',function(){jQuery(window).on('scroll',function(){if($(this).scrollTop()>200){$('#header .header-inner').addClass("sticky");}
else{$('#header .header-inner').removeClass("sticky");}});$(function(){$('#nav').slicknav({'label':'','prependTo':'.mobile-menu',});});$('.testimonial-slider').owlCarousel({items:1,autoplay:true,autoplayTimeout:3500,smartSpeed:1000,autoplayHoverPause:true,loop:true,merge:true,nav:false,dots:true,});$('.single-pf').owlCarousel({items:1,autoplay:false,autoplayTimeout:4500,smartSpeed:1000,autoplayHoverPause:true,margin:15,loop:true,merge:true,nav:true,dots:false,navText:['PREVIOUS','NEXT'],});$('.clients-slider').owlCarousel({autoplay:true,autoplayTimeout:3000,margin:15,smartSpeed:1000,autoplayHoverPause:true,loop:true,nav:false,dots:false,responsive:{300:{items:2,},480:{items:3,},768:{items:4,},1170:{items:6,}}});$('.popup').magnificPopup({type:'image',gallery:{enabled:true}});$.stellar({horizontalOffset:0,verticalOffset:0});var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:false,live:true,callback:function(box){},scrollContainer:null});wow.init();$(window).on('load',function(){if($.fn.isotope){$(".isotop-active").isotope({filter:'*',});$('.works-menu ul li').on('click',function(){$(".works-menu ul li").removeClass("active");$(this).addClass("active");var selector=$(this).attr('data-filter');$(".isotop-active").isotope({filter:selector,animationOptions:{duration:750,easing:'linear',queue:true,}});return false;});}});$('#nav').onePageNav({changeHash:false,scrollSpeed:1000,filter:'',});$(function(){$.scrollUp({scrollName:'scrollUp',topDistance:'300',topSpeed:300,animation:'fade',animationInSpeed:200,animationOutSpeed:200,scrollText:["<i class='fa fa-rocket'></i>"],activeOverlay:false,});});$('.counter').counterUp({delay:10,time:2500,});$(window).on('load',function(){$('.loader').fadeOut('slow',function(){$(this).remove();});});});