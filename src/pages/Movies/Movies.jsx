import { useEffect, useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarStyled,
} from './Movies.styled';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { lazy } from 'react';
const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

const SearchBarMovies = () => {
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const setParamsName = ({ target: { value } }) => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return toast.error(
        'Sorry, there are no films matching your search query. Please try again.'
      );
    }
    setSearchText(query);
  };

  useEffect(() => {
    if (query) {
      setSearchText(query);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <SearchbarStyled>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            onChange={setParamsName}
            value={query}
          />
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>
        </SearchForm>
      </SearchbarStyled>
      {searchText && <MoviesList searchText={searchText} />}
    </section>
  );
};

export default SearchBarMovies;
