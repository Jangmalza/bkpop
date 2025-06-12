// src/components/HeaderArea.js
import './HeaderArea.css';
import logo from '../assets/logo.png';

function HeaderArea() {
  return (
    <div className="header-area">
      {/* 왼쪽: 로고 */}
      <div className="logo">
        <img src={logo} alt="로고" />
      </div>

      {/* 가운데: 배너 
      <div className="banner">
        <img src="https://via.placeholder.com/400x50?text=광고+배너" alt="배너" />
      </div>
      */}
      
      {/* 오른쪽: 버튼/안내 */}
      <div className="right-section">
        <div className="guide">
          <span>❓ 사이트 이용방법</span>
        </div>
        <div className="download">
          <button>양식 다운받기 ⬇</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderArea;
