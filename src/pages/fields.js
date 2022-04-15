import React from 'react';
// const Layout = loadable(() => import('../components/Layout'));
import Layout from '../components/Layout';
// import {PonyEggs} from "../components/Buttons/MintPonyEggs";
import loadable from "@loadable/component";
const PonyEggs = loadable(() => import('../components/Buttons/MintPonyEggs'));

class Fields extends React.Component {
    render() {
        return (
            <Layout fullMenu={false} page="fields">
                <section id="banner-fields">
                    <div className="inner-fields">
                        <p style={{textShadow: ' 1px 1px 1px #bbb831'}}
                        >
                            You wander in the land around the The Old Lab. These lush grounds are filled with life,
                            from little creatures in the herbs to those big eggs that definitly don't look like
                            belongings to those creatures...
                            <br/>
                            <br/>
                            <PonyEggs/>
                            <br/>
                            OR<br/>
                            <a href="https://paintswap.finance/marketplace/collections/0xa578d7f04ea7129f0ef81827846156438da65025"
                               target="_blank">> Try to catch a little creature</a>
                            {/*<p>*/}
                            {/*    Send your fantomon trainers in a journey*/}
                            {/*</p>*/}
                            {/*<section id="one" className="wrapper spotlight">*/}
                            {/*    <Journey/>*/}
                            {/*</section>*/}
                        </p>
                    </div>
                    <div id="arrow">
                    </div>
                </section>
                <br/>
                <br/>
                <br/>
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
