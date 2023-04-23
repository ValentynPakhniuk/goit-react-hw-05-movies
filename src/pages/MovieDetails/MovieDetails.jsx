import { useEffect, useRef, useState } from 'react';
import { getIdFilm } from 'Fetch';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  ContainerFilm,
  ContainerInform,
  GoBackButton,
  ListGenres,
  TitleInform,
} from './MovieDetails.styled';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { CgArrowLeft } from 'react-icons/cg';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieIdFilms, setMovieIdFilms] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      try {
        setError(null);
        const data = await getIdFilm(movieId);
        if (!data) {
          setMovieIdFilms(null);
          return toast.error('Not found');
        }
        setMovieIdFilms(data);
      } catch (error) {
        setError(error);
        toast.error(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);
  return (
    <>
      <Loader isLoading={isLoading} />
      <Link to={backLinkLocationRef.current}>
        <GoBackButton>
          <CgArrowLeft size="16" />
          <span>Go back</span>
        </GoBackButton>
      </Link>
      {error && <h2>{error.response.data.status_message}</h2>}
      {movieIdFilms && (
        <ContainerFilm>
          <img
            src={`https://image.tmdb.org/t/p/original${movieIdFilms.poster_path}`}
            alt={movieIdFilms.title || movieIdFilms.name}
            width="250"
          />
          <div>
            <h2>
              {movieIdFilms.title || movieIdFilms.name} (
              {movieIdFilms.release_date.slice(0, 4)})
            </h2>
            <p>Use score: {(movieIdFilms.vote_average * 10).toFixed(0)}%</p>
            <h3>Overview</h3>
            <p>{movieIdFilms.overview || <span>No information</span>}</p>

            <h4>Genres</h4>
            {(
              <ListGenres>
                {movieIdFilms.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ListGenres>
            ) || <span>No information</span>}
          </div>
        </ContainerFilm>
      )}

      <ContainerInform>
        <TitleInform>Additional information</TitleInform>
        <p>
          <Link to="cast">Cast</Link>
        </p>
        <p>
          <Link to="reviews">Reviews</Link>
        </p>
      </ContainerInform>
      <Suspense fallback={<Loader isLoading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
