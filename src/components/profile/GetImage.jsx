/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const GetImage = ({ query = "minimalism abstract backgrounds" }) => {
  const [photo, setPhoto] = useState(null);
  console.log("query che arriva", query);

  const ACCESS_KEY = `2XWbEqqkK6AerFu28tEnvVVgKHQ3Aj5KE2IShHT86dvRP9jcW7kGyEBG`;

  const pexelsPhotos = async () => {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(
          query
        )}&per_page=100&orientation=landscape`,

        {
          headers: {
            Authorization: ACCESS_KEY,
          },
        }
      );
      console.log(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(
          query
        )}&per_page=100&orientation=landscape`
      );

      // minimalist+abstract

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
    if (query) {
      pexelsPhotos();
    }
  }, [query]);

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
