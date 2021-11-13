import React from 'react';
import { Link } from 'gatsby';

export default function NavHelp({ onMenuToggle = () => {} }) {
  return (
    <nav id="help">
      <div className="inner">
        <h2>Help</h2>
        blablablablelblaelbzllelrtgrfsred
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
