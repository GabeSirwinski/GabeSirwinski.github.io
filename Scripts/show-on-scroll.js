
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

// Navbar expand on scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('#main_navbar').removeClass('p-2');
    $('#main_navbar').addClass('p-4');
  } else {
    $('#main_navbar').removeClass('p-4');
    $('#main_navbar').addClass('p-2');
  }
}

//Navbar disappear on scroll down

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('#main_navbar').css('opacity','1');
  } else if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    $('#main_navbar').css('opacity','0');
  }
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    $('#main_navbar').removeClass('p-2');
    $('#main_navbar').addClass('p-4');
  } else {
    $('#main_navbar').removeClass('p-4');
    $('#main_navbar').addClass('p-2');
  }
  prevScrollpos = currentScrollPos;
}