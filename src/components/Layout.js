import React from 'react';
import Helmet from 'react-helmet';

import '../assets/sass/main.scss';
import Footer from './Footer';
import loadable from "@loadable/component";

const TemporaryDrawer = loadable(() => import('../components/Buttons/TemporaryDrawer'));

// import TemporaryDrawer from "./Buttons/TemporaryDrawer";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPreloaded: true,
            fullMenu: props.fullMenu,
        };
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({isPreloaded: false});
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        const {children} = this.props;
        const {isPreloaded} = this.state;
        return (
            <>
                <Helmet
                    title="The Old Fanto-Lab"
                    meta={[
                        {name: 'description', content: 'The Old Fanto-Lab'},
                        {name: 'keywords', content: 'site, web'},
                    ]}
                >
                    <html lang="en"/>
                </Helmet>
                <div className={isPreloaded ? ' main-body  is-preload' : ' main-body'}>
                    {/*    <div class="ee">X</div>*/}
                    <TemporaryDrawer/>
                    <div id="page-wrapper">
                        {/*<SideBar fullMenu={false} />*/}
                        {/*<SideBarHelp fullMenu={fullMenu} />*/}
                        {children}
                        {/*<Journey />*/}
                    </div>
                    <Footer/>
                </div>
            </>
        );
    }
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
