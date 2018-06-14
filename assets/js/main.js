// 
  // start typed area
//



  document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typed', {
      stringsElement: '.typed-strings',
      typeSpeed: 20,
      startDelay: 1000,
      loop: true,
      loopCount: Infinity,
      startDelay: 900,
      smartBackspace: 500,
    });
  });
// 
  // End typed area
// 







// 
  // Start Protfolio Area
// 
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});



  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };



  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
// 
  // End Protfolio area
// 





// 
  // For counter up
// 
jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});
// 
  // End Counter Up
// 





// 
  //Start navbar fixed Scroller
// 
$(window).scroll(function(e) {

  if ($(this).scrollTop() >= 552) {
    $('.navbar-default').fadeIn();
  } else if ($('.navbar-default').fadeOut());

});
// 
  //End navbar fixed Scroller
// 






// 
  //Start Section itemes manu
// 
$(window).scroll(function(e) {

  if ($(this).scrollTop() >= 560) {
    $('.menu-area-left-about').fadeIn();
  } else if ($('.menu-area-left-about').fadeOut());


  if ($(this).scrollTop() >= 1000) {
    $('.menu-area-left-experience').fadeIn();
  } else if ($('.menu-area-left-experience').fadeOut());



  if ($(this).scrollTop() >= 2000) {
    $('.menu-area-left-education').fadeIn();
  } else if ($('.menu-area-left-education').fadeOut());



  if ($(this).scrollTop() >= 2960) {
    $('.menu-area-left-skill').fadeIn();
  } else if ($('.menu-area-left-skill').fadeOut());



  if ($(this).scrollTop() >= 3980) {
    $('.menu-area-left-portfolio').fadeIn();
  } else if ($('.menu-area-left-portfolio').fadeOut());



  if ($(this).scrollTop() >= 5460) {
    $('.menu-area-left-contact').fadeIn();
  } else if ($('.menu-area-left-contact').fadeOut());


});
// 
  //End Section itemes manu
// 






// 
  //  Start  Back to Top Botton
// 
$(window).scroll(function (e) {

  if ($(this).scrollTop() >= 500) {
    $('.scrollup').fadeIn();
  } else if ($('.scrollup').fadeOut());

});

$('.scrollup').click(function (e) {
  $('html,body').animate({
    scrollTop: 0
  }, 6000);
});
// 
  //  End  Back to Top Botton
// 








wow = new WOW(
{
  animateClass: 'animated',
  offset:       100,
  callback:     function(box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
}
);
wow.init();
document.getElementById('moar').onclick = function() {
  var section = document.createElement('section');
  section.className = 'section--purple wow fadeInDown';
  this.parentNode.insertBefore(section, this);
};