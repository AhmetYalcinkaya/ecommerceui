import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="left">
          <span className="lang">EN</span>
          <div className="searchcontainer">
            <input className="input" />
          </div>
        </div>
        <div className="center">
          <h1 className="logo">Shop-INN</h1>
        </div>
        <div className="right">
          <div className="menuitem">REGISTER</div>
          <div className="menuitem">SING IN</div>
          <div className="menuitem"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
