import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PhotosList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const albumId = queryParams.get('albumId');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, [albumId]);

  return (
    <div>
      <h1>Photos</h1>
      {photos.map(photo => (
        <div key={photo.id}>
          <h4>{photo.title}</h4>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  );
};

export default PhotosList;
