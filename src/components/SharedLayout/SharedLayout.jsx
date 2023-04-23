import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, StyledLink } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export default function SharedLayout() {
  return (
    <>
      <Header>
        <nav>
          <ul className="nav-list">
            <li>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<Loader isLoading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
