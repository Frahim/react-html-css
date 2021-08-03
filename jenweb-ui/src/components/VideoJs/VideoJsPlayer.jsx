import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-quality-levels';

// Add videojs to window, zh-CN.js language registration depends on videojs.addLanguage() method
// If the configuration does not take effect, set the <html lang="en"> </html> lang in public/index.html to "zh-CN"
window.videojs = videojs;
// import("video.js/dist/lang/zh-CN.js");

const VideoJsPlayer = props => {
  const { src } = props;
  const videoRef = useRef(null);

  // This seperate functional component fixes the removal of the videoelement
  // from the DOM when calling the dispose() method on a player
  const VideoHtml = () => (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );

  useEffect(() => {
    const videoElement = videoRef.current;
    const videoJsOptions = {
      // lookup the options in the docs for more options
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src,
        },
      ],
    };
    let player;
    if (videoElement) {
      player = videojs(videoElement, videoJsOptions, () => {
        console.log('player is ready');
      });
    }
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [src]);

  return <VideoHtml />;
};

export default VideoJsPlayer;
