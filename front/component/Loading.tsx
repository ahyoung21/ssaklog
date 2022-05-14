import React, { useState } from 'react';
import listStyled from '../styles/listStyled.js';

import styled, { ThemeProvider } from 'styled-components';
import theme from '../common/theme';

const Loading = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <listStyled.logoEffect>
          <div className="logo">Loading..</div>
        </listStyled.logoEffect>
      </ThemeProvider>
    </>
  );
};

export default Loading;
