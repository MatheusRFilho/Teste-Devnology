import { useEffect } from 'react';
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
          <a className="linkActive" href="/">
            Veículos
          </a>
        ) : (
          <a className="link" href="/">
            Veículos
          </a>
        )}
      </div>
      {/* <div>
        <a className="link" href="#">
          Test
        </a>
      </div>
      <div>
        <a className="link" href="#">
          Test
        </a>
      </div> */}
    </div>
  );
};

export default NavBar;
