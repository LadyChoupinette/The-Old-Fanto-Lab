import React from 'react';
import loadable from '@loadable/component';

// const Layout = loadable(() => import('../components/Layout'));
import Layout from '../components/Layout';
import config from '../../config';
// import Journey from '../components/Journey';
const Journey = loadable(() => import('../components/Journey'));

class Index extends React.Component {
    render() {
        return (
            <Layout fullMenu={false} page="index">
                <section id="banner" >
                    <div className="inner">
                        {/*<div className="logo">*/}
                        {/*  <span className="icon fa-diamond"></span>*/}
                        {/*</div>*/}
                        <h2>{config.heading}</h2>
                        {/*<p>{config.subHeading}</p>*/}
                        <p>
                            Far away, on a distant planet, the old fanto lab runs again.<br/> You can hear noises
                            insides, even voices !
                            <br/>
                            Surely it will open its doors very soon...
                        </p>
                    </div>
                    <div id="arrow">
                        {/*<Link to='one' smooth={true}><IoIosArrowDown/></Link>*/}
                    </div>
                </section>
                <br/>
                <br/>
                <br/>
                <section id="wrapper">
                    <section id="one" className="wrapper spotlight">
                        <Journey/>
                    </section>

                    <section id="four" className="wrapper alt style1">
                        <div className="inner">
                            <p className="major">
                                The noises of the Old lab seems to attract strange creatures all around...
                            </p>
                        </div>
                    </section>
                </section>
            </Layout>
        );
    }
}

export default Index;
