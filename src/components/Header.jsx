import logo from '../images/logo.png';

import SearchFilm from './SearchFilm';

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="search">
          <SearchFilm />
        </div>
      </div>
    </div>
  );
};

export default Header;
