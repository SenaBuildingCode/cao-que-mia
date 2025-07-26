"use client";

import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";
import styles from "./ImageGalleryCarousel.module.css";

const images = [
  {
    original: "/foto-feira-1.png",
    thumbnail: "/foto-feira-1.png",
  },
  {
    original: "/foto-feira-2.png",
    thumbnail: "/foto-feira-2.png",
  },
  {
    original: "/foto-feira-3.png",
    thumbnail: "/foto-feira-3.png",
  },
  {
    original: "/foto-feira-4.png",
    thumbnail: "/foto-feira-4.png",
  },
];

const ImageGalleryCarousel = () => {
  return (
    <div className={styles.galleryWrapper}>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={false}
        slideDuration={450}
        additionalClass={styles.customGallery}
      />
    </div>
  );
};

export default ImageGalleryCarousel;
