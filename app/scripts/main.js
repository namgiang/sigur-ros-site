// ------------------------------------
// background YouTube video
// ------------------------------------

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const player;
const bgVideo = document.querySelector('#background--video');

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

const audio = document.querySelector('#track');
const audioButton = document.querySelector('.audio-player--button');

audioButton.onclick = (e)  => {
  audioButton.classList.toggle('audio-player--button_pause');
  if (!audio.paused) {
    audio.pause();
  } else {
    audio.play();
  }
};

// ------------------------------------
// modal
// ------------------------------------

const bookModal = document.querySelector('#book-modal');

$('#book-button').click(() => {
  bookModal.style.display = "block";
});

$('.close')click(() => {
  bookModal.style.display = "none";
});

$(window).click((e) => {
  if (e.target == bookModal) {
    bookModal.style.display = "none";
  }
});

// ------------------------------------
// about button
// ------------------------------------

let offsetTop = $('.about').offset().top;

$('#about-button').click(() => {
  let updateFrame = () => {
    $('.content').animate({ scrollTop: offsetTop }, 400, function(){
      window.requestAnimationFrame(updateFrame);
    });
  }
  updateFrame();
});
