import "./Header.css";
import AmazonLogo from '../../assets/pngimg.com - amazon_PNG28.png'
const Header = () => {
  return (
    <div className="header">
      <img
        className="header-logo"
        src={AmazonLogo}
        alt=""
      />
      <div className="header_search">
        <form action="" id="uniqueFormid"></form>

        {/* Logo */}
        <div className="nav">
          <div className="header_option">
            <span className="header__option1">Hello guest</span>
          </div>
          <div className="header_option">
            <span className="header__option2">Returns</span>
          </div>
          <div className="header_option">
            <span className="header__option3">& Orders</span>
          </div>
          <div className="header_option">
            <span className="header__option4">Your</span>
          </div>
          <div className="header_option"></div>
        </div>
      </div>
    </div>
  );
};
export default Header;
