import React from 'react';
import GalleryItem from './GalleryItem';
import config from '../../config'

function Gallery() {
    // Sample gallery items (replace with your actual image paths and titles)
    const galleryItems = [
        { id: 1, imageUrl: 'path/to/your/image1.jpg' },
        { id: 2, imageUrl: 'path/to/your/image2.jpg' },
        // Add more items as needed
    ];

    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-container">
                {galleryItems.map(item => (
                    <GalleryItem key={item.id} imageUrl={item.imageUrl} title={item.title} />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
