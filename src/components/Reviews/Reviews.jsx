import { getIdFilmReviews } from 'Fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListReviews } from './Reviews.styled';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getReviews() {
      try {
        setError(null);
        const data = await getIdFilmReviews(movieId, controller);
        if (data.results.length === 0) {
          setReviews(null);
          return;
        }
        setReviews(data);
      } catch (error) {
        if (error.response) {
          setError(error);
          toast.error(error.response.data.status_message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    getReviews();
    return () => {
      controller.abort();
    };
  }, [movieId]);
  return (
    <>
      <Loader isLoading={isLoading} />
      {error && <h2>{error.response.data.status_message}</h2>}
      {reviews === null ? (
        <p>Not Found Reviews</p>
      ) : (
        <ListReviews>
          {reviews.results.map(({ id, author, content }) => (
            <li key={id}>
              <span>Author: </span>
              {author}
              <p>{content}</p>
            </li>
          ))}
        </ListReviews>
      )}
    </>
  );
};

export default Reviews;
