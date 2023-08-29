import React, { useState } from 'react';
import Swal from 'sweetalert2'; 

function ImageList({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const openImagePopup = (image) => {
    Swal.fire({
      title: `Photographer: ${image.photographer}`,
      html: `
        <p>ID: ${image.id}</p>
        <p>Width: ${image.width}</p>
        <p>Height: ${image.height}</p>
        <p>Image URL: <a href="${image.src.original}" target="_blank" rel="noopener noreferrer">${image.src.original}</a></p>
        <p>Photographer ID: ${image.photographer_id}</p>
      `,
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {selectedImage && (
          <div  className="modal" onClick={closeImage}>
            <div  onClick={(e) => e.stopPropagation()}>
              {/* Display selected image information here , you can cancel the popup*/}
            </div>
          </div>
        )}
      </div>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img
              src={image.src.medium}
              alt={`Photo by ${image.photographer}`}
              onClick={() => openImagePopup(image)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageList;





