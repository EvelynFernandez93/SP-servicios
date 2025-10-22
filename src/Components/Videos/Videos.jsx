import React from "react";
import "../Videos/Videos.css";

const Videos = ({ videoUrl }) => {
  // Asegura que el enlace termine con "/"
  const normalizedUrl = videoUrl.endsWith("/") ? videoUrl : `${videoUrl}/`;

  return (
    <section className="videos-section">
      <h3 className="video-titulo">
        Te cuento un poco de qué se trata este proyecto
      </h3>

      <div className="video-container">
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
    </section>
  );
};

export default Videos;

