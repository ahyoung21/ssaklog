import React, { useState, useEffect, useRef } from 'react';
import Loading from '../component/common/Loading';
import { ThemeProvider } from 'styled-components';
import theme from '../component/common/theme';
import EditTextBox from '../hooks/EditTextBox';
import styled from 'styled-components';

export default function write() {
  const [isLoad, setIsLoad] = useState(false);

  const SsakEditor = styled.div`
    display: block;
    position: relative;
    width: 100%;
  `;

  useEffect(() => {
    // 로드 조건 달성 시 setIsLoad(true) 처리. (ex. API 통신 및 로드 완료 시)
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  });

  useEffect(() => {
    console.log('test');
  }, []);

  return (
    <>
      {isLoad ? (
        <ThemeProvider theme={theme}>
          <SsakEditor>
            <EditTextBox />
            <EditTextBox />
          </SsakEditor>
        </ThemeProvider>
      ) : (
        <Loading />
      )}
    </>
  );
}
