// src/components/MainCategoryNav.js
import './MainCategoryNav.css';

function MainCategoryNav() {
  return (
    <div className="main-category-nav">
      <div className="nav-inner">
        <div className="category-left">
          <ul className="category-list">
            <button className="menu-button">≡</button>
            <li>상업인쇄</li>
            <li>디지털인쇄</li>
            <li>판촉물</li>
            <li>패키지</li>
            <li>기획상품</li>
            <li>셀프디자인</li>
            <li>실사출력</li>
          </ul>
        </div>

        <div className="category-icons">
          <div className="icon-item">📸 <span>상품소개</span></div>
          <div className="icon-item">✏️ <span>인쇄가이드</span></div>
          <div className="icon-item">👤 <span>마이페이지</span></div>
        </div>
      </div>
    </div>
  );
}

export default MainCategoryNav;
