import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import theme from '../component/common/theme';
import styled from 'styled-components';

import styleLogin from '../styles/Login.module.scss';
import HeadInfo from '../component/common/HeadInfo';
import Loading from '../component/common/Loading';

export default function Signup() {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    // 로드 조건 달성 시 setIsLoad(true) 처리. (ex. API 통신 및 로드 완료 시)
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  });
  return (
    <>
      <HeadInfo title="싹로그 : 회원가입" />
      {isLoad ? (
        <SignupItem className={styleLogin.loginBox}>
          <strong className={styleLogin.loginLogo + ` login-logo`}>
            <Link href="/">SSAKLOG</Link>
          </strong>

          <SignupForm>
            <div>
              <label htmlFor="user-email"></label>
            </div>
            <button
              type="button"
              className={styleLogin.btnLogin + ` btn-login`}
              onClick={() => (location.href = '/list')}
            >
              가입하기
            </button>
          </SignupForm>
        </SignupItem>
      ) : (
        <Loading />
      )}
    </>
  );
}

const SignupItem = styled.div`
  width: 32rem;
  height: 50rem;
  margin: auto;
`;

const SignupForm = styled.form``;
