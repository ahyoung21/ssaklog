import React, { useState, useEffect } from 'react';
import Loading from '../component/common/Loading';
import { ThemeProvider } from 'styled-components';
import theme from '../component/common/theme';
import listStyled from '../styles/listStyled.js';
import CardList from '../component/list/CardList';
import ListData from '../data/SampleList.json';

export default function List() {
  const [isLoad, setIsLoad] = useState(false);
  const [itemList, setItemList] = useState([]);

  const getListFormJson = () => {
    setItemList(ListData);
  };

  useEffect(() => {
    // 로드 조건 달성 시 setIsLoad(true) 처리. (ex. API 통신 및 로드 완료 시)
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  });

  useEffect(() => {
    getListFormJson();
  }, []);

  return (
    <>
      {isLoad ? (
        <ThemeProvider theme={theme}>
          <listStyled.Container>
            <div className="list-box">
              <CardList itemList={itemList} />
            </div>
          </listStyled.Container>
        </ThemeProvider>
      ) : (
        <Loading />
      )}
    </>
  );
}
