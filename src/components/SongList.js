import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "My song 4 you", id: 1 },
    { title: "My song 4 you 2", id: 2 },
    { title: "My song 4 you 3", id: 3 }
  ]);
  const [age, setAge] = useState(18);
  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  // useEffect runs when ever the page renders
  useEffect(() => {
    console.log("Song changed: ", songs);
  }, [songs]);
  useEffect(() => {
    console.log("Age Changed: ", age);
  }, [age]);

  return (
    <div>
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to Age {age}</button>
    </div>
  );
};

export default SongList;
