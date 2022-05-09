import styleLogin from '../styles/Login.module.scss';
import HeadInfo from '../component/HeadInfo';

export default function Login() {
  return (
    <>
      <HeadInfo title="SSAKLOGIN" />
      <div className={styleLogin.loginBox}>
        <strong className={styleLogin.loginLogo + ` login-logo`}>SSAKLOG</strong>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
        <button type="button" className={styleLogin.btnLogin + ` btn-login`}>
          로그인
        </button>
      </div>
    </>
  );
}
