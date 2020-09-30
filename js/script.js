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
  var lastIndex = $('#clients-carousel').find('.client').length - 1;

  $('#clients-carousel').on('click', '.previous', showClient);
  $('#clients-carousel').on('click', '.next', showClient);
  $('#client-carousel-pips').on('click', '.pip', showFromPip);

  generatePips();
  setLeftClass();

  var carouselRunning = true;
  var carouselRestartTimeout;

  var interval = setInterval(function () {
    if (carouselRunning) {
      showNextClient();
    }
  }, 5000);

  function showNextClient() {
    if (currentIndex === lastIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateState(currentIndex);
  };

  function showClient(event) {
    if ($(event.target).hasClass('client')) {
      var target = $(event.target);
    } else {
      var target = $(event.target).parent();
    }
    var index = $('.client').index(target);
    updateState(index);

    // clearTimeout(carouselRestartTimeout);
    // carouselRunning = false;
    // carouselRestartTimeout = setTimeout(function () {
    //   carouselRunning = true;
    // }, 10000);
  };

  function updateState(index) {
    prevIndex = index === 0 ? lastIndex : index - 1;
    currentIndex = index;
    nextIndex = index === lastIndex ? 0 : index + 1;

    updateCarouselPosition();
    setLeftClass();
    updatePips();
  }

  function updateCarouselPosition() {
    $('#clients-carousel').find('.previous').removeClass('previous');
    $('#clients-carousel').find('.current').removeClass('current');
    $('#clients-carousel').find('.next').removeClass('next');

    var allClients = $('#clients-carousel').find('.client');
    $(allClients[prevIndex]).addClass('previous');
    $(allClients[currentIndex]).addClass('current');
    $(allClients[nextIndex]).addClass('next');

  }

  function generatePips() {
    var listContainer = $('#client-carousel-pips').find('ul');
    for (var i = lastIndex; i >= 0; i--) {
      var newPip = $('<li class="pip"></li>');
      $(listContainer).append(newPip);
    }
    updatePips();
  }

  function updatePips() {
    $('#client-carousel-pips').find('.previous').removeClass('previous');
    $('#client-carousel-pips').find('.current').removeClass('current');
    $('#client-carousel-pips').find('.next').removeClass('next');
    var allPips = $('#client-carousel-pips').find('.pip');
    $(allPips[prevIndex]).addClass('previous');
    $(allPips[currentIndex]).addClass('current');
    $(allPips[nextIndex]).addClass('next');

  }

  function showFromPip(event) {
    var index = $('#client-carousel-pips li').index(event.target);
    updateState(index);

  }

  function setLeftClass() {
    var allQuotes = $('#clients-carousel').find('.quote');
    $('.quote.left').removeClass('left');
    if (prevIndex > 0) {
      var index = prevIndex - 1;
      $(allQuotes[index]).addClass('left');
    } else {
      $(allQuotes[lastIndex]).addClass('left');
    }
  }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      carouselRunning = false;
    } else {
      carouselRunning = true;
    }
  })

});




