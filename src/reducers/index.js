import { act } from "react-dom/test-utils";

import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { ttle: "No Scrubs", duration: "4:05" },
    { title: "All Star", duration: "2:30" },
    { title: "Macarena", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
