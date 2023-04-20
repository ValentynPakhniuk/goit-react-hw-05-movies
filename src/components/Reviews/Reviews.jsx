import { getIdFilmReviews } from 'Fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListReviews } from './Reviews.styled';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getIdFilmReviewsAsync = async () => {
    try {
      const data = await getIdFilmReviews(id);
      if (data === 0) {
        setReviews(null);
        return toast.error('Unknown error');
      }
      setReviews(data);
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
    getIdFilmReviewsAsync();
  }, []);
  return (
    <section>
      <Loader isLoading={isLoading} />
      {error && <h1>{error.response.data.status_message}</h1>}
      {reviews && (
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
    </section>
  );
};
