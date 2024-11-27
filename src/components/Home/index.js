import { Link } from 'react-router-dom';
import './index.css';
import CartContext from '../../context/CartContext';

const Home = () => (
  <>
    <CartContext.Consumer>
      {(value) => {
        const { isDarkTheme } = value;
        const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light';
        const textClass = isDarkTheme ? 'text-light' : 'text-dark';
        const buttonClass = isDarkTheme ? 'button-dark' : 'button-light';

        return (
          <div className={`home-container ${homeBgClassName}`}>
            <div className="home-content">
              <h1 className={`home-heading ${textClass}`}>Clothes That Get YOU Noticed</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes to be noticed"
                className="home-mobile-img"
              />
              <p className={`home-description ${textClass}`}>
                Fashion is part of the daily air and it does not quite help that it
                changes all the time. Clothes have always been a marker of the era and
                we are in a revolution. Your fashion makes you been seen and heard
                that way you are. So, celebrate the seasons new and exciting fashion
                in your own way.
              </p>
              <Link to="/products">
                <button type="button" className={`shop-now-button ${buttonClass}`}>
                  Shop Now
                </button>
              </Link>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="dresses to be noticed"
              className="home-desktop-img"
            />
          </div>
        );
      }}
    </CartContext.Consumer>
  </>
);

export default Home;
