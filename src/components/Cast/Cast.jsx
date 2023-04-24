import { getIdFilmCredits } from 'Fetch';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getMovieIdCastAsync() {
      setIsLoading(true);
      try {
        setError(null);
        const data = await getIdFilmCredits(movieId, controller);
        if (data.cast.length === 0) {
          setCast(null);
          return;
        }
        setCast(data);
      } catch (error) {
        if (error.response) {
          setError(error);
          toast.error(error.response.data.status_message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    getMovieIdCastAsync();
    return () => {
      controller.abort();
    };
  }, [movieId]);
  return (
    <>
      <Loader isLoading={isLoading} />
      {error && <h2>{error.response.data.status_message}</h2>}
      {cast === null ? (
        <p>Not Found Cast</p>
      ) : (
        <ul>
          {cast.cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path !== null
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : `https://thumbs.dreamstime.com/b/best-design-global-news-digital-illusration-71660044.jpg`
                }
                alt={name}
                width="150"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
