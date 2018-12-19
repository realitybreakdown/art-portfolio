import React from 'react';
import { Player } from 'video-react';
import './Video.css';

const Video = (props) => {
  return (
    <div className="test">
        <Player
          playsInline
          poster="https://i.ytimg.com/vi/C0DPdy98e4c/hqdefault.jpg"
          src="https://youtu.be/C0DPdy98e4c"
        />
    </div>
  );
};

export default Video;