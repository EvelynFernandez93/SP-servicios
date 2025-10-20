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

const Videos = ({ videoUrl }) => {
  // Asegura que el enlace termine con "/"
  const normalizedUrl = videoUrl.endsWith("/") ? videoUrl : `${videoUrl}/`;

  return (
    <div className="video-container">
      <h3 className="video-titulo">" Te cuento un poco de que se trata este proyecto "</h3>
      <div className="video-wrapper">
        <iframe
          src={`${normalizedUrl}embed`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          title="Instagram Video"
        ></iframe>
      </div>
    </div>
  );
};

export default Videos;
