import React, { useState } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "My song 4 you", id: 1 },
    { title: "My song 4 you 2", id: 2 },
    { title: "My song 4 you 3", id: 3 }
  ]);
  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  return (
    <div>
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
