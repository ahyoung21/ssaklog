import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../component/common/theme';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';

export default function EditTextBox() {
  const returnText = useRef('');

  const handleChange = (e) => {
    returnText.current = e.target.value;
    returnText.current.length > 0
      ? e.currentTarget.classList.remove('placeholder')
      : e.currentTarget.classList.add('placeholder');
  };

  // input 에 forcus 했을때, 테두리 style 을 적용합니다.
  const forcusIn = (e) => {
    e.currentTarget.parentNode.classList.add('edit-border');
  };

  // 글 작성이 완료되었을때, 테두리 style을 제거하고, 업데이트 합니다.
  const handleBlur = (e) => {
    console.log(returnText.current);
    e.currentTarget.parentNode.classList.remove('edit-border');
  };

  const EditText = styled.div`
    display: block;
    position: relative;
    width: 95%;
    min-height: 3rem;
    margin: 0.8rem auto;
    padding: 1.4rem;
    text-align: left;
    border-radius: 0.5rem;
    box-sizing: border-box;
    .content-edit-text {
      font-size: 2.2rem;
      outline: 0;
      border: 0;
      &.placeholder::before {
        content: '내용을 입력해 주세요.';
        color: #aaa;
      }
    }
    &.edit-border {
      border: 0.1rem solid #ddd;
    }
  `;

  const EditStyleControl = styled.div`
    position: absolute;
    top: -3rem;
    left: 0;
    width: 100%;
    height: 3rem;
    border: 0.1rem solid #ddd;
    border-radius: 0.5rem;
    box-sizing: border-box;
  `;

  useEffect(() => {
    // 로드 조건 달성 시 setIsLoad(true) 처리. (ex. API 통신 및 로드 완료 시)
    setTimeout(() => {}, 1000);
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <EditText>
          {/* <EditStyleControl>
            <button type="button">test</button>
          </EditStyleControl> */}
          <ContentEditable
            html={returnText.current}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={forcusIn}
            className={`content-edit-text` + (returnText.current.length <= 0 ? ` placeholder` : ``)}
          />
        </EditText>
      </ThemeProvider>
    </>
  );
}
