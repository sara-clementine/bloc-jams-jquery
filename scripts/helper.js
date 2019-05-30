class Helper {
  playPauseAndUpdate(song) {
    player.playPause();
    $('.total-time').html(song.duration);
  }
}

const helper = new Helper;
