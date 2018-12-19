import React from 'react';
import { Player } from 'video-react';
import './Video.css';

const Video = (props) => {
  return (
    <div className="Video">
      <div className="Player">
        <Player
          playsInline
          poster="https://i.imgur.com/2lUXy5u.jpg"
          src="../../img/Video/Newt.mp4"
        />
      </div>
      <div className="Player">
        <Player
          playsInline
          poster="https://i.imgur.com/iBpuFbB.png"
          src="../../img/Video/NothingNew1.mp4"
        />
      </div>
      <div className="Player">
        <Player
          playsInline
          poster="https://i.imgur.com/sbhmc3G.png"
          src="../../img/Video/NothingNew2.mp4"
        />
      </div>
      <div className="Player">
        <Player
          playsInline
          poster="https://i.imgur.com/d5HYi5l.png"
          src="../../img/Video/NothingNew3.mp4"
        />
      </div>
      <div className="Player">
        <Player
          playsInline
          poster="https://i.imgur.com/SaTvSWu.png"
          src="../../img/Video/NothingNew4.mp4"
        />
      </div>
      <div className="Player">
        <Player
          playsInline
          poster="https://i.imgur.com/11uLPV7.png"
          src="../../img/Video/NothingNew5.mp4"
        />
      </div>
    </div>
  );
};

export default Video;