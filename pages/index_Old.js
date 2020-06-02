import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const provider = new HDWalletProvider(
  'best hair current identify nation speed rough goddess license winner calm demand',
  'https://rinkeby.infura.io/v3/9bd8135f514a479990c6b4062cf24855'
);

const web3 = new Web3(provider);

class App extends React.Component {

  static async getInitialProps({store}) {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    return {accounts};
  } 
  constructor(props) {
    super(props);
  }  
  
  render() {
    return (
      <div>
        {this.props.accounts[0]}
          <button onClick={this.props.incrementCounter}>Increment</button>
          <button onClick={this.props.decrementCounter}>Decrement</button>
          <h1>{this.props.counter}</h1>
      </div>
  );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
