import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const startTime = parseInt(localStorage.getItem('videoplayer-current-time'));
if (startTime) {
  player.setCurrentTime(startTime);
}

player.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

window.addEventListener('load', function() {
  const startTime = parseInt(localStorage.getItem('videoplayer-current-time'));
  if (startTime) {
    player.setCurrentTime(startTime);
  }
});

