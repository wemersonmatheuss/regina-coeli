import React from 'react';
import styles from './styles.module.css';

const Video: React.FC = () => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        width="100%"
        height="650"
        src="https://www.youtube.com/embed/kdJUp8zd5UY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
