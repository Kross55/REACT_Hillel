import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Common.css';

function AlbumsList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('userId');
  const [albums, setAlbums] = useState([]);
  
  console.log(userId);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  return (
    <div>
      <h3>Albums</h3>
      {albums.map(album => (
        <div key={album.id}>
          <h4>{album.title}</h4>
          <button>
            <Link to={`/photos?albumId=${album.id}`} className={'link'}>Photos</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
