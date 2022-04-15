import React from 'react';
// import loadable from '@loadable/component';
// const Layout = loadable(() => import('../components/Layout'));
import Layout from '../components/Layout';

class Workshop extends React.Component {
    render() {
        return (
            <Layout fullMenu={false} page="workshop">
                <section id="banner-workshop">
                    <div className="inner-workshop">
                        <p>
                            The center of the lab is the workshop. Various machines and designs are spread all over the
                            place, but a staring,
                            unpleasant look forbid you to know more about theses<br/><br/>
                            <span className="dialog-old-man">- You ! What do you want, I'm busy here. If you have any ideas or research to share, do so, otherwise, be gone !</span><br/><br/>
                            {/*The unsympathetic Old-Man seems to allow you to look around after all...<br/><br/>*/}
                            {/*X X X*/}
                        </p>
                    </div>
                    <div id="arrow">
                        {/*<Link to='one' smooth={true}><IoIosArrowDown/></Link>*/}
                    </div>
                </section>
                <br/>
                <br/>
                <br/>
                <section id="wrapper-workshop">
                    <section id="one" className="wrapper-workshop spotlight">
                        {/*<Fields />*/}
                    </section>

                    {/*<section id="four" className="wrapper-workshop alt style1">*/}
                    {/*    <div className="inner">*/}
                    {/*        <p className="major">*/}
                    {/*            The noises of the Old lab seems to attract strange creatures all around...*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </section>
            </Layout>
        );
    }
}

export default Workshop;
