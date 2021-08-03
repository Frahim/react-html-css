import React, { useState } from 'react';
import 'videojs-contrib-quality-levels';
import VideoJsPlayer from './VideoJsPlayer';

const VideoJs = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoUrls = [
    'https://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8',
    'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    'https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    // 'https://dvmsh2ijmmkgw.cloudfront.net/HLS/ExploringMysteries.m3u8',
  ];
  return (
    <div>
      <br />
      <ul>
        Choose Video
        {videoUrls.map((_, index) => (
          <li
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveVideo(index)}
          >
            {`Video ${index + 1}`}
          </li>
        ))}
      </ul>
      Playing Video: {videoUrls[activeVideo]}
      <VideoJsPlayer src={videoUrls[activeVideo]} />
    </div>
  );
};

export default VideoJs;
