import React from "react";
// const Layout = loadable(() => import('../components/Layout'));
// import {PonyEggs} from "../components/Buttons/MintPonyEggs";
import loadable from "@loadable/component";
import Layout from "../components/Layout";
import { Grid } from "@mui/material";
// import PFPonies from '../components/Buttons/MintPFPonies';

const PFPonies = loadable(() => import('../components/Buttons/MintPFPonies'));
const PonyPost = loadable(() => import('../components/Buttons/PonyPost'));


class Fields extends React.Component {
  render() {
    return (
      <Layout fullMenu={false} page="fields">
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <section className="banner-fields">
              <div className="inner-fields">
                <h1>The PFPonies are here !</h1>
                <p className="pfponies">
                  <br />
                  <br />
                  They even opened a f*cking post office ?!
                  <br />
                </p>
                <p className="pfponies">Grab their asses !!</p>
                <br />
                <br />
                <PFPonies />
                <br />
              </div>
            </section>
          </Grid>
          {/*<Grid item xs={1}></Grid>*/}
          <Grid item xs={6}>
            <section className="banner-fields">
              <div className="inner-fields">
                <h1>PonyPost'</h1>
                <PonyPost />
              </div>
            </section>
          </Grid>
        </Grid>

        <br />
        <br />
        <br />
        <br />
        <br />
      </Layout>
    );
  }
}

export default Fields;
