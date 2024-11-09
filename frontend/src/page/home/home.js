import { Link } from 'react-router-dom'

import "./home.css";
import "animate.css";

export default function Home() {
  return (
    <>
      <div className="home_image_container1">
        <img
          src="/asset/home_image.png"
          className="aimg animate__animated animate__bounceInLeft"
        />
      </div>
      {/* <div className="home_image_container2">
        <img
          src="/asset/b.png"
          className="bimg animate__animated animate__bounceInDown"
        />
      </div> */}
      <Link to="/login"><button type="button" className="btn go_to_login btn-lg animate__animated animate__bounceInRight">로그인</button></Link>
      <Link to="/sign_up"><button type="button" className="btn go_to_sign_up btn-lg animate__animated animate__bounceInRight">회원가입</button></Link>
    </>
  );
}
