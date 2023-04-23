// import { ItemFilm } from 'components/ItemFilm/ItemFilm';
// import { CardList, TitleTrending } from './Home.styled';
import { useEffect, useState } from 'react';
import { getTrendingFilms } from 'Fetch';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { CardList, TitleTrending } from './Home.styled';
import { ItemFilm } from 'components/ItemFilm/ItemFilm';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getHomeList() {
      setIsLoading(true);
      try {
        setError(null);
        const data = await getTrendingFilms(controller);
        if (data.length === 0) {
          setTrendingFilms(null);
          return toast.error('Unknown error');
        }

        setTrendingFilms(data);
      } catch (error) {
        if (error.response) {
          setError(error);
          toast.error(error.response.data.status_message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    getHomeList();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section>
      <Loader isLoading={isLoading} />
      {error && <h2>{error.response.data.status_message}</h2>}
      {trendingFilms && (
        <>
          <TitleTrending>Trending today</TitleTrending>
          <CardList>
            {trendingFilms.map(film => (
              <ItemFilm key={film.id} film={film}></ItemFilm>
            ))}
          </CardList>
        </>
      )}
    </section>
  );
};

export default Home;
