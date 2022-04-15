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
            page: props.page,
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

    classnamePage() {
        let cName = this.state.isPreloaded ? 'is-preload' : '';
        if (this.state.page === 'index') {
            cName = cName + ' main-body'
        } else if (this.state.page === 'fields') {
            cName = cName + ' main-body-fields'
        } else if (this.state.page === 'workshop') {
            cName = cName + ' main-body-workshop'
        }
        return cName

    }

    render() {
        const {children} = this.props;
        return (
            <> {this.state.page === 'index' ?
            < Helmet
                title="The Old Fanto-Lab"
                meta={[
            {name: 'description', content: 'The Old Fanto-Lab'},
            {name: 'keywords', content: 'site, web'},
                ]}
                >
                <html lang="en"/>
                </Helmet>
            :
                < Helmet/>
                }
                <div className={this.classnamePage()}>
                    <TemporaryDrawer/>
                    {this.state.page === "index" ?
                        <div id="page-wrapper">
                            {children}
                        </div>
                        : this.state.page === "fields" ?
                        <div id="page-wrapper-fields">
                            {children}
                        </div>
                            :
                            <div id="page-wrapper-workshop">
                                {children}
                            </div>
                    }
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
