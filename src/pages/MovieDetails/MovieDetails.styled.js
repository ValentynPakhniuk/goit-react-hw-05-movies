import styled from 'styled-components';

export const GoBackButton = styled.button`
  display: inline-flex;
  gap: 3px;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 5px;
`;

export const ListGenres = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
  padding: 0px;
`;

export const ContainerFilm = styled.div`
  display: flex;
  gap: 15px;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const ContainerInform = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
  width: 100vw;

  & p {
    margin: 0;
  }
`;

export const TitleInform = styled.h2`
  margin: 0px;
`;
