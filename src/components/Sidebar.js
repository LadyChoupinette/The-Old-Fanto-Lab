import React from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerOpen: props.headerOpen,
    };
  }

  toggleHeader = () =>
    this.setState({
      headerOpen: !this.state.headerOpen,
    });

  render() {
    return (
      <>
        <header id="header" className={`${this.state.headerOpen ? '' : 'alt'}`}>
          <h1>
            <Link to="/">The Old Fanto Lab</Link>
          </h1>
          <nav>
            <a
              href="#menu"
              onClick={e => {
                e.preventDefault();
                this.toggleHeader(!this.state.headerOpen);
              }}
              className="menuToggle"
            >
              <span>Menu</span>
            </a>
          </nav>
        </header>
        <div className={`${this.state.headerOpen ? 'is-menu-visible' : ' '}`}>
          <Nav onMenuToggle={() => this.toggleHeader(!this.state.headerOpen)} />
        </div>
      </>
    );
  }
}
export default SideBar;
