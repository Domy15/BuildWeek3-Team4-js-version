/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const GetImage = () => {
  const [photo, setPhoto] = useState(null);

  const ACCESS_KEY = `2XWbEqqkK6AerFu28tEnvVVgKHQ3Aj5KE2IShHT86dvRP9jcW7kGyEBG`;

  const pexelsPhotos = async () => {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/curated?per_page=10`,
        {
          headers: {
            Authorization: ACCESS_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore richiesta delle img");
      }

      const data = await response.json();

      if (data.photos.length > 0) {
        const randomPhoto =
          data.photos[Math.floor(Math.random() * data.photos.length)];
        setPhoto(randomPhoto);
      } else {
        throw new Error("Nessuna immagine trovata");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    pexelsPhotos();
  }, []);

  return (
    <>
      {photo ? (
        <img
          src={photo.src.large}
          alt={photo.photographer}
          className="w-100 rounded-top object-fit-cover h-100"
        />
      ) : (
        <p>Caricamento immagine...</p>
      )}
    </>
  );
};

export default GetImage;
