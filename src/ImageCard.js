import React from 'react';

function ImageCard({ image }) {
  if (!image) {
    return <div>No image data available.</div>;
  }

  

  return (
    <div >
      <img src={image.src?.medium || ''} alt={image.photographer || ''} />
      <p>Photographer: {image.photographer || 'Unknown'}</p>
      <p>Photographer URL: <a href={image.photographer_url || '#'}>{image.photographer_url || 'N/A'}</a></p>
      <p>Photographer ID: {image.photographer_id || 'N/A'}</p>
      <p>Original Size: {image.width || 'N/A'} x {image.height || 'N/A'}</p>
    </div>
  );
}

export default ImageCard;