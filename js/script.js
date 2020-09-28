// Scroll to top

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    document.getElementById("go-to-top").style.display = "block";
  } else {
    document.getElementById("go-to-top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Carousel

$(function () {
  var prevIndex = 0;
  var currentIndex = 1;
  var nextIndex = 2;
  var lastIndex = $('#clients-carousel').find('client').length - 1;

  $('#clients-carousel').on('click', '.previous', showClient);
  $('#clients-carousel').on('click', '.next', showClient);
  $('#client-carousel-pips').on('click', '.pip', showFromPip);

  generatePips();

  var carouselRunning = true;
  var interval = setInterval(function () {
    if (carouselRunning) {
      showNextClient();
    }
  }, 4000);

  function showNextClient() {

  };

  function showClient() {

  };

  function updateState(index) {

  }

  function updateCarouselPosition() {

  }

  function generatePips() {

  }

  function updatePips() {

  }

  function showFromPip() {

  }

  function setLeftClass() {

  }

});




