import styled from 'styled-components';

export const SearchbarStyled = styled.div`
  top: 0;
  left: 0;
  z-index: 1100;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border: 1px solid gray;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-left: 20px;
  &:hover {
    border: 2px solid blue;
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 100px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }

  & span {
    font-size: 16px;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  max-width: 600px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
