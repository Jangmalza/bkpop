import { useState } from 'react';
import './MainCategoryNav.css';

function MainCategoryNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="main-category-nav">
      <div className="nav-inner">
        <div className="category-left">
          <div className="menu-wrapper">
            <button className="menu-button" onClick={toggleDropdown}>
              {dropdownOpen ? '✖' : '≡'}
            </button>

            {dropdownOpen && (
              <div className={`dropdown-menu show mega-menu`}>
                <div className="mega-grid">

                  <div className="mega-column">
                    <h4>명함</h4>
                    <ul>
                      <li>일반지명함</li>
                      <li>고급지명함</li>
                      <li>카드명함</li>
                      <li>하이브리드명함</li>
                      <li>투명하이브리드명함</li>
                      <li>에폭시명함</li>
                      <li>프리컷팅</li>
                    </ul>
                    <h4>봉투</h4>
                    <ul>
                      <li>대/중/소</li>
                      <li>규격형</li>
                      <li>자켓형</li>
                      <li>안내형</li>
                      <li>기성형</li>
                      <li>캘린더봉투</li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h4>전단</h4>
                    <ul>
                      <li>합판전단</li>
                      <li>고급전단</li>
                      <li>랑데뷰합판</li>
                    </ul>
                    <h4>스티커</h4>
                    <ul>
                      <li>재단형</li>
                      <li>도무송형</li>
                      <li>차량스티커</li>
                      <li>메탈스티커</li>
                      <li>라벨스티커(롤)</li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h4>테스트</h4>
                    <ul>
                      <li>테스트</li>
                      <li>테스트</li>
                      <li>테스트</li>
                      <li>테스트</li>
                      <li>테스트</li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h4>홍보물</h4>
                    <ul>
                      <li>카탈로그/브로셔</li>
                      <li>포스터</li>
                      <li>리플렛</li>
                      <li>책자</li>
                      <li>홀더</li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h4>홍보물</h4>
                    <ul>
                      <li>카탈로그/브로셔</li>
                      <li>포스터</li>
                      <li>리플렛</li>
                      <li>책자</li>
                      <li>홀더</li>
                    </ul>
                  </div>                  

                </div>
              </div>
            )}
          </div>

          <ul className="category-list">
            <li>테스트</li>
            <li>테스트</li>
            <li>테스트</li>
            <li>테스트</li>
            <li>테스트</li>
            <li>테스트</li>
            <li>테스트</li>
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