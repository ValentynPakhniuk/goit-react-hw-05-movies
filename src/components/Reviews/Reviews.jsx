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
    async function getReviews() {
      try {
        setError(null);
        const data = await getIdFilmReviews(movieId);
        if (data.results.length === 0) {
          setReviews(null);
          return;
        }
        setReviews(data);
      } catch (error) {
        setError(error);
        toast.error(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    getReviews();
  }, [movieId]);
  return (
    <>
      <Loader isLoading={isLoading} />
      {error && <h2>{error.response.data.status_message}</h2>}
      {reviews === null ? (
        <p>Not Found Reviews</p>
      ) : (
        <ListReviews>
          {reviews.results.map(review => (
            <li key={review.id}>
              <span>Author: </span>
              {review.author}
              <p>{review.content}</p>
            </li>
          ))}
        </ListReviews>
      )}
    </>
  );
};

export default Reviews;
