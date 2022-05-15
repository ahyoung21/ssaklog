import React, { useState, useEffect } from 'react';
import Loading from '../component/Loading';
import { ThemeProvider } from 'styled-components';
import theme from '../common/theme';
import listStyled from '../styles/listStyled.js';

export default function List() {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    // 로드 조건 달성 시 setIsLoad(true) 처리. (ex. API 통신 및 로드 완료 시)
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  });

  return (
    <>
      {isLoad ? (
        <ThemeProvider theme={theme}>
          <listStyled.Container>
            <div className="category-box">left</div>
            <div className="list-box">right</div>
          </listStyled.Container>
        </ThemeProvider>
      ) : (
        <Loading />
      )}
    </>
  );
}
