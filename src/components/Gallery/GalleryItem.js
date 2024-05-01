import React from 'react';
import config from '../../config'
function GalleryItem({ imageUrl, title }) {
    return (
        <div className="gallery-item">
            <img src={imageUrl} alt={title} className="gallery-image" />
            <div className="gallery-item-title">{title}</div>
        </div>
    );
}

export default GalleryItem;
