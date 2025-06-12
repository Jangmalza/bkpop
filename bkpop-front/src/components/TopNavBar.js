// src/components/TopNavBar.js
import './TopNavBar.css';

function TopNavBar() {
  return (
    <div className="top-nav">
      <div className="top-nav-left">
        <a href="#">웹하드</a>
        <a href="#">고객센터</a>
        <a href="#">A/S상담</a>
        <a href="#">카톡상담</a>
      </div>
      <div className="top-nav-right">
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
        <a href="#">장바구니</a>
        <a href="#">주문내역</a>
      </div>
    </div>
  );
}

export default TopNavBar;
