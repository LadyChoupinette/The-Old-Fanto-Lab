import React from 'react';
import { Link } from 'gatsby';

export default function NavHelp({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Help</h2>
          <ul className="links">
              <li>
                  <Link
                      onClick={e => {
                          onMenuToggle();
                      }}
                      to="/"
                  >
                      Help
                  </Link>
              </li>
              <li>
                  <Link
                      onClick={e => {
                          onMenuToggle();
                      }}
                      to="https://the-old-fanto-lab.vercel.app/"
                  >
                      About
                  </Link>
              </li>
          </ul>
        <a
          className="close"
          onClick={e => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#help"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
