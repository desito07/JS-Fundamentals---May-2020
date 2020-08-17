function gramophone(band, album, song) {
    band = String(band);
    album = String(album);
    song = String(song);
    console.log(
      `The plate was rotated ${Math.ceil(
        (album.length * band.length * song.length) / 2 / 2.5
      )} times.`
    );
  }
  gramophone("Black Sabbath", "Paranoid", "War Pigs");