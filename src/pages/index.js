import React from 'react';
import {Link} from 'react-scroll'
import Layout from '../components/Layout';
// import {Web3Provider} from "react-web3"

// import pic1 from '../assets/images/pic01.jpg';
// import pic2 from '../assets/images/pic02.jpg';
// import pic3 from '../assets/images/pic03.jpg';
// import pic4 from '../assets/images/pic04.jpg';
// import pic5 from '../assets/images/pic05.jpg';
// import pic6 from '../assets/images/pic06.jpg';
// import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
import {IoIosArrowDown} from "react-icons/all";
import Journey from "../components/Journey";
const IndexPage = () => (

    // <Web3Provider></Web3Provider>
  <Layout>
    <section id="banner">
      <div className="inner" >
        {/*<div className="logo">*/}
        {/*  <span className="icon fa-diamond"></span>*/}
        {/*</div>*/}
        <h2>{config.heading}</h2>
        {/*<p>{config.subHeading}</p>*/}
        <p>Far away, on a distant planet, the old fanto lab starts running again. Tales of the treasures and mysteries
            it harbours start spreading accross the galaxy. Some also talk about its danger... The truth about this lab and its planet remains to be discovered...</p>
      </div>
        <Link id ='arrow' to='one' smooth={true}><IoIosArrowDown/></Link>
    </section>
    <br/><br/><br/>
    <section id="wrapper">
      <section id="one" className="wrapper spotlight">
            <Journey/>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <p className="major">The tale begins...</p>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
