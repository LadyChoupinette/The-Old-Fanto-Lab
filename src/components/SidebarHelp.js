import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import NavHelp from "./NavHelp";
export default function SideBarHelp() {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <div id="header" className={`'alt'`}>
        <h1>
          <Link to="/">Solid State</Link>
        </h1>

        <nav>
          <a
            href="#help"
            onClick={e => {
              e.preventDefault();
              toggleHeader(!headerOpen);
            }}
            className="menuToggle"
          >
            <span>Help</span>
          </a>
        </nav>
      </div>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <NavHelp onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
}
