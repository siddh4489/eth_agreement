import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const provider = new HDWalletProvider(
  'best hair current identify nation speed rough goddess license winner calm demand',
  'https://rinkeby.infura.io/v3/9bd8135f514a479990c6b4062cf24855'
);

const web3 = new Web3(provider);

class CampaignIndex extends Component {

  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    return {accounts};
  }  

  render() {
    return (
      
        <div>
          {this.props.accounts[0]}
          <h3>Open Campaigns</h3>
          
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          
        </div>
      
    );
  }
}

export default CampaignIndex;
