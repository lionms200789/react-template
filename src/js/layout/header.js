import { NavLink } from "react-router-dom";

/**
 * 頁首
 */
const Header = () => {
  return (
    <header>
      <div>我是頁首</div>
      <ul className="list-unstyled">
        <li>
          <NavLink to="/">首頁</NavLink>
        </li>
        <li>
          <NavLink to="/page1">Page1</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
