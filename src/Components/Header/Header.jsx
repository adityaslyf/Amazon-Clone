// import "./Header.css";
// import AmazonLogo from "../../assets/pngimg.com - amazon_PNG28.png";
// import SearchIcon from "@mui/icons-material/Search";
// const Header = () => {
//   return (
//     <div className="header">
//       <img className="header-logo" src={AmazonLogo} alt="" />
//       <div className="header_search">
//         <form action="" id="uniqueFormid">
//           <input type="text" className="header_searchInput" />
//           <SearchIcon className="header_searchIcon" />
//         </form>

//         {/* Logo */}
//         <div className="nav">
//           <div className="header_option">
//             <span className="header__option1">Hello guest</span>
//           </div>
//           <div className="header_option">
//             <span className="header__option2">Returns</span>
//           </div>
//           <div className="header_option">
//             <span className="header__option3">& Orders</span>
//           </div>
//           <div className="header_option">
//             <span className="header__option4">Your</span>
//           </div>
//           <div className="header_option"></div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Header;

import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import AmazonLogo from "../../assets/pngimg.com - amazon_PNG28.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={AmazonLogo} />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="checkout__logo">
          <ShoppingBasketIcon className="header__basket" />
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
