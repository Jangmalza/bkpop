// src/components/QuickServiceIcons.js
import './QuickServiceIcons.css';

const services = [
  { id: 1, label: '명함주문', icon: '💳' },
  { id: 2, label: '디자인 의뢰', icon: '🎨' },
  { id: 3, label: '주문조회', icon: '📦' },
  { id: 4, label: '견적문의', icon: '📝' },
  { id: 5, label: '시안확인', icon: '🔍' },
  { id: 6, label: '카톡상담', icon: '💬' },
];

function QuickServiceIcons() {
  return (
    <div className="quick-service">
      <h2>빠른 서비스</h2>
      <div className="icon-list">
        {services.map((item) => (
          <div className="icon-box" key={item.id}>
            <div className="icon">{item.icon}</div>
            <div className="label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickServiceIcons;
