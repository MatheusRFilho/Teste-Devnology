import './NavBar.css';

const NavBar = ({ activeItem }) => {
  return (
    <div className="nav-bar">
      <div>
        {activeItem === 'financial' ? (
          <a className="linkActive" href="/">
            Financeiro
          </a>
        ) : (
          <a className="link" href="/">
            Financeiro
          </a>
        )}
      </div>
      <div>
        {activeItem === 'vehicles' ? (
          <a className="linkActive" href="/vehicles">
            Veículos
          </a>
        ) : (
          <a className="link" href="/vehicles">
            Veículos
          </a>
        )}
      </div>
    </div>
  );
};

export default NavBar;
