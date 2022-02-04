import React from 'react';
import { Link } from 'gatsby';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerOpen: props.onMenuToggle,
    };
  }

  render() {
    return (
      <nav id="menu">
        <div className="inner">
          <h2>Menu</h2>
          <ul className="links">
            <li>
              <Link
                onClick={() => {
                  this.state.onMenuToggle();
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  this.state.onMenuToggle();
                }}
                to="https://the-old-fanto-lab.vercel.app/"
              >
                Dev App
              </Link>
            </li>
          </ul>
          <a
            className="close"
            onClick={e => {
              e.preventDefault();
              this.state.onMenuToggle();
            }}
            href="#menu"
          >
            {''}
          </a>
        </div>
      </nav>
    );
  }
}
export default Nav;
