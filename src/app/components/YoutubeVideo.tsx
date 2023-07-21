import React from 'react';
import { youtubeRegex } from '../utils/youtubeRegex';

interface YouTubeVideoProps {
  videoUrl: string;
}

const YoutubeVideo = ({ videoUrl }: YouTubeVideoProps) => {
  const decodedUrl = decodeURIComponent(videoUrl);
  const match = new RegExp(youtubeRegex).exec(decodedUrl);

  if (!match || !match[6]) return <>Vídeo não reconhecido</>;

  return (
    <iframe
      src={`https://www.youtube.com/embed/${match[6]}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen={true}
      className='aspect-video w-full rounded-lg shadow'
    />
  );
};

export default YoutubeVideo;
