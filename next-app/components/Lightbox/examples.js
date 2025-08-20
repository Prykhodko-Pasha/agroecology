import Image from 'next/image';
import Lightbox from './Lightbox';

// Example 1: Image Lightbox
export const ImageLightboxExample = ({ isOpen, onClose, imageSrc, imageAlt }) => (
  <Lightbox isOpen={isOpen} onClose={onClose}>
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={800}
      height={600}
      className="lightbox__image"
    />
  </Lightbox>
);

// Example 2: Video Lightbox
export const VideoLightboxExample = ({ isOpen, onClose, videoSrc }) => (
  <Lightbox isOpen={isOpen} onClose={onClose}>
    <video controls width="800" height="600" className="lightbox__video">
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Lightbox>
);

// Example 3: Custom Content Lightbox
export const CustomContentLightboxExample = ({ isOpen, onClose, title, content }) => (
  <Lightbox isOpen={isOpen} onClose={onClose}>
    <div className="custom-lightbox-content">
      <h2>{title}</h2>
      <div className="content-body">
        {content}
      </div>
      <div className="actions">
        <button className="btn btn-primary">Action 1</button>
        <button className="btn btn-secondary">Action 2</button>
      </div>
    </div>
  </Lightbox>
);

// Example 4: Form Lightbox
export const FormLightboxExample = ({ isOpen, onClose, onSubmit }) => (
  <Lightbox isOpen={isOpen} onClose={onClose}>
    <form className="contact-form" onSubmit={onSubmit}>
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">Send Message</button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  </Lightbox>
);

// Example 5: Gallery Lightbox
export const GalleryLightboxExample = ({ isOpen, onClose, images, currentIndex, onNext, onPrev }) => (
  <Lightbox isOpen={isOpen} onClose={onClose}>
    <div className="gallery-lightbox">
      <div className="gallery-nav">
        <button className="nav-btn prev" onClick={onPrev}>&#10094;</button>
        <button className="nav-btn next" onClick={onNext}>&#10095;</button>
      </div>
      <div className="gallery-content">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={800}
          height={600}
          className="lightbox__image"
        />
      </div>
      <div className="gallery-info">
        <span className="image-counter">{currentIndex + 1} / {images.length}</span>
        <p className="image-description">{images[currentIndex].alt}</p>
      </div>
    </div>
  </Lightbox>
);
