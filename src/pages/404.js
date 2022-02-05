import React from 'react';

import Layout from '../components/Layout';

const notFound = () => {
  return (
    <Layout fullMenu={false}>
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>Page not found</h2>
            <p>Not a valid URL</p>
          </div>
        </header>
      </section>
    </Layout>
  );
};
export default notFound;
