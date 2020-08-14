
// Element effects on scrolling into viewport

var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } 
  });

  scroll(loop);
}

loop();
function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


//Navbar disappear on scroll down, Navbar expand on scroll down, shrink at top of page

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('#main_navbar').css('opacity','1');
  } else if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    $('#main_navbar').css('opacity','0');
  }
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    $('#main_navbar').removeClass('p-1');
    $('#main_navbar').removeClass('bg-none');
    $('#main_navbar').addClass('bg-info');
    $('#main_navbar').addClass('p-3');
  } else {
    $('#main_navbar').removeClass('p-3');
    $('#main_navbar').removeClass('bg-info');
    $('#main_navbar').addClass('bg-none');
    $('#main_navbar').addClass('p-1');
  }
  prevScrollpos = currentScrollPos;
}


// Main jumbotron hide for collapsing menu

$('.navbar-toggler').on('click', function(){
  if($('.hide-me').hasClass('text-white')){
    $('.hide-me').removeClass('text-white');
    $('.hide-me').attr('stroke-width','0');
  } else {
    $('.hide-me').addClass('text-white');
    $('.hide-me').attr('stroke-width','2');
  }
});




