import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/global';
import theme from './theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
