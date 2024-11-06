import "./login.css";
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login">
      <h2>로고</h2>
      <h3>로그인</h3>
      <form className="login-form">
        <label htmlFor="username">아이디</label>
        <input
          type="text"
          className="username"
          placeholder="아이디를 입력해주세요."
        />
        <label htmlFor="password">패스워드</label>
        <input
          type="password"
          className="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </form>
      <div className="find">
        <label>
          <input type="checkbox" />
          아이디 기억
        </label>
        <div><Link to="/find-id">아이디</Link>/<Link to="/find-password">비밀번호 찾기</Link> | <Link to="/signup">회원가입</Link></div>
      </div>
      <div>
        <button className="login-button">로그인</button>
      </div>
    </div>
  );
}
