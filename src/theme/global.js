import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {

    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    font-size: 20px;
    font-family: 'StarWarsJedi';
    color: #ffffff;
    padding: 0;
    margin: 0;
    transition: all 0.25s linear;
  }
  .header__menu li a{
    color: ${({ theme }) => theme.text};
  }
  .shooting_star{
    background: linear-gradient(-45deg, ${({ theme }) => theme.gradient}, rgba(0, 0, 255, 0));
    -webkit-filter: drop-shadow(0 0 6px ${({ theme }) => theme.color});
    filter: drop-shadow(0 0 6px ${({ theme }) => theme.color});
  }
  .shooting_star::before,
.shooting_star::after {
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), ${({ theme }) =>
    theme.gradient}, rgba(0, 0, 255, 0));
}
.button{
  border: 3px solid ${({ theme }) => theme.color};
  box-shadow: -1px 0px 8px 0px ${({ theme }) => theme.color};
  
}
.button--play .button__shape{
  background: ${({ theme }) => theme.color};
}
  `;
