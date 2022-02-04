import React from 'react';
import loadable from '@loadable/component';

const Layout = loadable(() => import('../components/Layout'));
// const Journey = loadable(() => import('../components/Layout'));
// import Layout from '../components/Layout';
import config from '../../config';
import Journey from '../components/Journey';
class Index extends React.Component {
  // <Web3Provider></Web3Provider>
  render() {
    return (
      <Layout fullMenu={false}>
        <section id="banner">
          <div className="inner">
            {/*<div className="logo">*/}
            {/*  <span className="icon fa-diamond"></span>*/}
            {/*</div>*/}
            <h2>{config.heading}</h2>
            {/*<p>{config.subHeading}</p>*/}
            <p>
              Far away, on a distant planet, the old fanto lab runs again. The
              end of winter makes it quite easier to navigate around.
              <br />
              Surely you will find something around here to help you on your
              quest... Perhaps even a way to enter inside ?
            </p>
          </div>
          <div id="arrow">
            {/*<Link to='one' smooth={true}><IoIosArrowDown/></Link>*/}
          </div>
        </section>
        <br />
        <br />
        <br />
        <section id="wrapper">
          <section id="one" className="wrapper spotlight">
            <Journey />
          </section>

          <section id="four" className="wrapper alt style1">
            <div className="inner">
              <p className="major">
                The Old scientist must be somewhere nearby...
              </p>
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
export default Index;
