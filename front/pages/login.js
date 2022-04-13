import styleLogin from '../styles/Login.module.scss';
import HeadInfo from '../component/HeadInfo';

export default function Login() {
  const themeTest = (theme) => {
    document.querySelector('body').classList.value = '';
    document.querySelector('body').classList.add('theme-' + theme);
  };
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
        <div className="theme-test-btn">
          <button type="button" className="btn-theme" onClick={() => themeTest('green')}>
            테마 green
          </button>
          <button type="button" className="btn-theme" onClick={() => themeTest('red')}>
            테마 red
          </button>
          <button type="button" className="btn-theme" onClick={() => themeTest('blue')}>
            테마 blue
          </button>
        </div>
      </div>
    </>
  );
}
