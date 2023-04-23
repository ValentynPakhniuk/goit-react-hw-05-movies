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
    async function getMovieIdCastAsync() {
      setIsLoading(true);
      try {
        setError(null);
        const data = await getIdFilmCredits(movieId);
        if (data.cast.length === 0) {
          setCast(null);
          return;
        }
        setCast(data);
      } catch (error) {
        setError(error);
        toast.error(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieIdCastAsync();
  }, [movieId]);
  return (
    <>
      <Loader isLoading={isLoading} />
      {error && <h2>{error.response.data.status_message}</h2>}
      {cast === null ? (
        <p>Not Found Cast</p>
      ) : (
        <ul>
          {cast.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path !== null
                    ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                    : `https://thumbs.dreamstime.com/b/best-design-global-news-digital-illusration-71660044.jpg`
                }
                alt={cast.name}
                width="150"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
