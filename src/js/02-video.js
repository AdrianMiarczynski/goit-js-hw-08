import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const timeUpdate = throttle(
  time => localStorage.setItem('videoplayer-current-time', time.seconds),
  1000
);
// player.on('play', function() {
//   throttle(
//     time => localStorage.setItem('videoplayer-current-time', time.seconds),
//     1000
//   );
//   // localStorage.setItem('videoplayer-current-time', ev.seconds);
// });

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', timeUpdate);
