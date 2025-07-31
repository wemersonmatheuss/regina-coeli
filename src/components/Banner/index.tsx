
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

import banner1 from '../../assets/banne1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

const images = [banner1, banner2, banner3];

const Banner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.bannerContainer}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Banner ${idx + 1}`}
          className={
            `${styles.bannerImage} ${current === idx ? styles.active : ''}`
          }
        />
      ))}
    </div>
  );
};

export default Banner;
