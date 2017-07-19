// ------------------------------------
// background YouTube video
// ------------------------------------

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var bgVideo = document.querySelector('#background--video');

function onYouTubeIframeAPIReady() {
  player = new YT.Player('background--video', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
}

function onPlayerReady() {
  player.mute();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    bgVideo.style.opacity = 1;
  }
}

function onPlayerError() {
  bgVideo.style.opacity = 0;
}

// ------------------------------------
// audio
// ------------------------------------

var audio = document.querySelector('#track');
var audioButton = document.querySelector('.audio-player--button');

audioButton.addEventListener('click', (e)  => {
  audioButton.classList.toggle('audio-player--button_pause');
  if (!audio.paused) {
    audio.pause();
  } else {
    audio.play();
  }
});

// ------------------------------------
// modal
// ------------------------------------

var bookModal = document.getElementById('book-modal');
var bookBtn = document.getElementById("book-button");
var closeSpan = document.getElementsByClassName("close")[0];

bookBtn.onclick = function() {
  bookModal.style.display = "block";
}

closeSpan.onclick = function() {
  bookModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == bookModal) {
    bookModal.style.display = "none";
  }
}
