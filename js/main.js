(function($) {
 let scroll_link = $('.scroll');

  //smooth scrolling -----------------------
  scroll_link.click(function(e){
      e.preventDefault();
      let url = $('body').find($(this).attr('href')).offset().top;
      $('html, body').animate({
        scrollTop : url
      },700);
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      return false; 
   });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#HMnav',
    offset: 56
  });





  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#HMnav").offset().top > 100) {
      $("#HMnav").addClass("navbar-shrink");
    } else {
      $("#HMnav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);








  

  // Hide navbar when modals trigger
 $('.carousel').carousel({
  interval: 11000
});




})(jQuery); // End of use strict


             