import React from "react";

const LibrarySong = ({
    song,
    songs,
    id,
    setCurrentSong,
    audioRef,
    isPlaying,
    currentSong,
}) => {
    const songSelectHandler = async () => {
        currentSong.active = false;
        await setCurrentSong(song);
        song.active = true;
        if (isPlaying) audioRef.current.play();
    };
    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${song.active ? "selected" : ""}`}
        >
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
