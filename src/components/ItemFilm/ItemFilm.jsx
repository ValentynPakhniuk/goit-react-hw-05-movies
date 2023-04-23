import { Link, useLocation } from 'react-router-dom';
import { Item } from './ItemFilm.styled';
import PropTypes from 'prop-types';

export const ItemFilm = ({ film }) => {
  const location = useLocation();
  return (
    <>
      <Item>
        <Link to={`/movies/${film.id}`} state={{ from: location }}>
          {film.title || film.name}
        </Link>
      </Item>
    </>
  );
};

ItemFilm.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
