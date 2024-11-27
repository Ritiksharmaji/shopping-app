import { Link, withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import { IoCloudyNightOutline, IoSunnyOutline } from 'react-icons/io5';
import CartContext from '../../context/CartContext';
import './index.css';

const Header = (props) => {
  const onClickLogout = () => {
    const { history } = props;
    Cookies.remove('jwt_token');
    history.replace('/login');
  };

  const renderCartItemsCount = (cartList) => {
    const cartItemsCount = cartList.length;
    return cartItemsCount > 0 ? (
      <span className="cart-count-badge">{cartItemsCount}</span>
    ) : null;
  };

  return (
    <CartContext.Consumer>
      {({ cartList, isDarkTheme, toggleTheme }) => {
        // Dynamically set class names based on theme
        const rootClass = isDarkTheme ? 'dark-theme' : 'light-theme';
        const textClass = isDarkTheme ? 'text-light' : 'text-dark';
        const headerClass = isDarkTheme ? 'header-dark' : 'header-light';

        return (
          <>
            {/* Apply the root theme class to the body or root element */}
            <div className={rootClass}>
              <nav className={`nav-header ${headerClass}`}>
                <div className="nav-content">
                  <div className="nav-bar-mobile-logo-container">
                    <Link to="/">
                      <img
                        className="website-logo"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                        alt="website logo"
                      />
                    </Link>

                    <button
                      type="button"
                      className="nav-mobile-btn"
                      onClick={onClickLogout}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                        alt="nav logout"
                        className="nav-bar-img"
                      />
                    </button>
                  </div>

                  <div className="nav-bar-large-container">
                    <Link to="/">
                      <img
                        className="website-logo"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                        alt="website logo"
                      />
                    </Link>
                    <ul className="nav-menu">
                      <li className="nav-menu-item">
                        <Link to="/" className={`nav-link ${textClass}`}>
                          Home
                        </Link>
                      </li>
                      <li className="nav-menu-item">
                        <Link to="/products" className={`nav-link ${textClass}`}>
                          Products
                        </Link>
                      </li>
                      <li className="nav-menu-item">
                        <Link to="/cart" className={`nav-link ${textClass}`}>
                          Cart
                          {renderCartItemsCount(cartList)}
                        </Link>
                      </li>
                      <li className="mood-changer">
                        {isDarkTheme ? (
                          <IoSunnyOutline
                            size={24}
                            onClick={toggleTheme}
                            style={{ verticalAlign: 'middle' }}
                          />
                        ) : (
                          <IoCloudyNightOutline
                            size={24}
                            onClick={toggleTheme}
                            style={{ verticalAlign: 'middle' }}
                          />
                        )}
                      </li>
                    </ul>
                    <button
                      type="button"
                      className={`logout-desktop-btn ${textClass}`}
                      onClick={onClickLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>

                <div className="nav-menu-mobile">
                  <ul className="nav-menu-list-mobile">
                    <li className="nav-menu-item-mobile">
                      <Link to="/" className={`nav-link ${textClass}`}>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                          alt="nav home"
                          className="nav-bar-img"
                        />
                      </Link>
                    </li>
                    <li className="nav-menu-item-mobile">
                      <Link to="/products" className={`nav-link ${textClass}`}>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                          alt="nav products"
                          className="nav-bar-img"
                        />
                      </Link>
                    </li>
                    <li className="nav-menu-item-mobile">
                      <Link to="/cart" className={`nav-link ${textClass}`}>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                          alt="nav cart"
                          className="nav-bar-img"
                        />
                        {renderCartItemsCount(cartList)}
                      </Link>
                    </li>
                    <li className="mood-changer">
                      {isDarkTheme ? (
                        <IoSunnyOutline
                          size={40}
                          onClick={toggleTheme}
                          style={{ verticalAlign: 'middle' }}
                        />
                      ) : (
                        <IoCloudyNightOutline
                          size={40}
                          onClick={toggleTheme}
                          style={{ verticalAlign: 'middle' }}
                        />
                      )}
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </>
        );
      }}
    </CartContext.Consumer>
  );
};

export default withRouter(Header);
