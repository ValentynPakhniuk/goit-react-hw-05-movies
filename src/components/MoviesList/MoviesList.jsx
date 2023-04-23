import { getSearchFilm } from 'Fetch';
import { ItemFilm } from 'components/ItemFilm/ItemFilm';
import { CardList } from 'pages/Home/Home.styled';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

const MoviesList = ({ searchText }) => {
  const [listFilms, setListFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchText === '') {
      return;
    }
    if (searchText) {
      async function getMoviesList() {
        setError(null);
        try {
          const data = await getSearchFilm(searchText);
          if (data.length === 0) {
            setListFilms(null);
            return toast.error(
              'Sorry, there are no films matching your search query. Please try again.'
            );
          }
          setListFilms([...data]);
        } catch (error) {
          setError(error);
          toast.error(error.response.data.status_message);
        } finally {
          setIsLoading(false);
        }
      }
      setIsLoading(true);
      getMoviesList();
    }
  }, [searchText]);
  return (
    <section>
      <Loader isLoading={isLoading} />
      {error && <h2>{error.response.data.status_message}</h2>}
      {listFilms && (
        <>
          <CardList>
            {listFilms.map(film => (
              <ItemFilm key={film.id} film={film}></ItemFilm>
            ))}
          </CardList>
        </>
      )}
    </section>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  searchText: PropTypes.string.isRequired,
};
