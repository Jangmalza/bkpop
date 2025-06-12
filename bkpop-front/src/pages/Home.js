// Home.js
import './Home.css';
import BannerSlider from '../components/BannerSlider';
import QuickServiceIcons from '../components/QuickServiceIcons';

function Home() {
  return (
        <div className="container">
        <div className="banner-quick-wrapper">
            <div className="banner-area">
            <BannerSlider />
            </div>
            <div className="quick-area">
            <QuickServiceIcons />
            </div>
        </div>
        </div>
  );
}

export default Home;
