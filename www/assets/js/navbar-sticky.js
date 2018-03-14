$(document).ready(function() {
  
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        //console.log($(window).scrollTop())
      if ($(window).scrollTop() > 180) {
        $('.js-nav-bar').addClass('c-am-site-nav--fixed');
      }
      if ($(window).scrollTop() < 181) {
        $('.js-nav-bar').removeClass('c-am-site-nav--fixed');
      }
    });
  });