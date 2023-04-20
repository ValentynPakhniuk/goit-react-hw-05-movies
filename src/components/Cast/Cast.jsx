import { getIdFilmCredits } from 'Fetch';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getMovieIdCastAsync = async () => {
    try {
      const data = await getIdFilmCredits(id);
      if (data === 0) {
        setCast(null);
        return toast.error('Unknown error');
      }
      setCast(data);
    } catch (error) {
      setError(error);
      toast.error(error.response.data.status_message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getMovieIdCastAsync();
  }, []);
  return (
    <section>
      <Loader isLoading={isLoading} />
      {error && <h1>{error.response.data.status_message}</h1>}
      {cast && (
        <ul>
          {cast.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={cast.name}
                width="150"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
