import React from 'react';
import PropTypes from 'prop-types';
import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/theme.scss';
import Layout from '../component/Layout';
import wrapper from '../store/configureStore';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(App);
