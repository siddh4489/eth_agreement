import React, { Component } from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import  {Home}  from './Home';

class App extends React.Component {
  render() {
    return (
      <Layout>
          <Home/>
      </Layout>
  );
  }
}
export default connect(state => state)(App);
