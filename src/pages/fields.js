import React from 'react';
// const Layout = loadable(() => import('../components/Layout'));
import Layout from '../components/Layout';
// import {PonyEggs} from "../components/Buttons/MintPonyEggs";
import loadable from '@loadable/component';
// import PFPonies from '../components/Buttons/MintPFPonies';

const PFPonies = loadable(() => import('../components/Buttons/MintPFPonies'));

class Fields extends React.Component {
  render() {
    return (
      <Layout fullMenu={false} page="fields">
        <section id="banner-fields">
          <div className="inner-fields">
            <h1>This is it !</h1>
            <p className="pfponies">
              <br />
              <br />
              The PFPonies are onto us ! God forbid us all !
              <br />
              <br />
              You better catch as many of them as you can, who knows what
              they're up to...
            </p>
            <br />
            <br />
            {/*<React.Fragment>*/}
            <PFPonies />
            {/*</React.Fragment>*/}
            <br />
            {/*<p style={{ textShadow: ' 1px 1px 1px #d1ff00' }}>*/}
            {/*  <span*/}
            {/*    style={{*/}
            {/*      position: 'relative',*/}
            {/*      fontSize: 'x-large',*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    (Each one is a free airdrop of PFPonies, very soon to come...)*/}
            {/*  </span>*/}
            {/*  <br />*/}
            {/*  OR*/}
            {/*  <br />*/}
            {/*  <a*/}
            {/*    href="https://paintswap.finance/marketplace/collections/0xa578d7f04ea7129f0ef81827846156438da65025"*/}
            {/*    target="_blank"*/}
            {/*  >*/}
            {/*    > Try to catch a little creature*/}
            {/*  </a>*/}
            {/*  /!*<p>*!/*/}
            {/*  /!*    Send your fantomon trainers in a journey*!/*/}
            {/*  /!*</p>*!/*/}
            {/*  /!*<section id="one" className="wrapper spotlight">*!/*/}
            {/*  /!*    <Journey/>*!/*/}
            {/*  /!*</section>*!/*/}
            {/*</p>*/}
          </div>
          <div id="arrow"></div>
        </section>
        <br />
        <br />
        <br />
        {/*<section id="wrapper-fields">*/}
        {/*    <section id="one" className="wrapper-fields spotlight">*/}
        {/*<Fields />*/}
        {/*</section>*/}

        {/*<section id="four" className="wrapper-fields alt style1">*/}
        {/*    <div className="inner">*/}
        {/*        <p className="major">*/}
        {/*            The noises of the Old lab seems to attract strange creatures all around...*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*</section>*/}
        {/*</section>*/}
      </Layout>
    );
  }
}

export default Fields;
