import { Link, Route, Routes } from 'react-router-dom';
import { HeaderBox } from './Header/Header';
import { ListTrending } from './ListTrending/ListTrending';
import { CardItem } from './ItemFilm/ItemFilm';
import { MovieId } from './MoviesId/MoviesId';
import { Movies } from './Movies/Movies';
import { useState } from 'react';
import { Searchbar } from './Seatchbar/Searchbar';
import { StyledLink } from './ItemFilm/ItemFilm.styled';
import { Cast, FilmCredits } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Container } from './Container.styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <Container>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <HeaderBox>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </HeaderBox>

      <Routes>
        <Route path="/" element={<ListTrending />} />
        <Route
          path="/movies"
          element={
            <Movies
            // searchText={searchText}
            // createSearchText={createSearchText}
            />
          }
        ></Route>
        <Route path="/movies/:id" element={<MovieId />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};
