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

  const handleSubmit = e => {
    e.preventDefault();
    const nextParams = searchText !== '' ? { query: searchText } : {};
    setSearchParams(nextParams);
    if (!searchText) {
      return toast.error(
        'Sorry, there are no films matching your search query. Please try again.'
      );
    }
  };

  useEffect(() => {
    if (query) {
      setSearchText(query);
    }
  }, [query]);

  return (
    <section>
      <SearchbarStyled>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            onChange={e => setSearchText(e.target.value)}
            value={searchText}
          />
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>
        </SearchForm>
      </SearchbarStyled>
      {query && <MoviesList searchText={query} />}
    </section>
  );
};

export default SearchBarMovies;
