/* import React from 'react'
import "../Videos/Videos.css"
import { useState } from "react";

const Videos = ({ videoId, thumbnail }) => {
    const [play, setPlay] = useState(false);

  return (
    <div className="video-container" onClick={() => setPlay(true)}>
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Proyecto"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img src={thumbnail} alt="Miniatura" className="video-thumb" />
          <div className="play-button">▶</div>
        </>
      )}
    </div>
  )
}

export default Videos */
/* import React, { useState } from "react";
import "../Videos/Videos.css";

const Videos = ({ videoId, thumbnail }) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="video-container" onClick={() => setPlay(true)}>
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&controls=1&showinfo=0`}
          title="Proyecto"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img src={thumbnail} alt="Miniatura" className="video-thumb" />
          <div className="play-button">▶</div>
        </>
      )}
    </div>
  );
};

export default Videos;
 */
/* import React, { useState } from "react";
import "../Videos/Videos.css";

const Videos = ({ videoId, thumbnail }) => {
  const [play, setPlay] = useState(false);

  const handleClick = () => {
    setPlay(true);
  };

  return (
    <div className="video-container" onClick={handleClick}>
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&modestbranding=1&rel=0&controls=1&showinfo=0`}
          title="Proyecto"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img src={thumbnail} alt="Miniatura" className="video-thumb" />
          <div className="play-button">▶</div>
        </>
      )}
    </div>
  );
};

export default Videos; */
import React from "react";
import "../Videos/Videos.css";

const Videos = ({ videoId, thumbnail }) => {
  const handleClick = () => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(url, "_blank"); // abre en nueva pestaña
  };

  return (
    <div className="video-container" onClick={handleClick}>
      <img src={thumbnail} alt="Miniatura" className="video-thumb" />
      <div className="play-button">▶</div>
    </div>
  );
};

export default Videos;

