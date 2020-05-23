import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.ethereum);

  window.ethereum.enable();
  console.log('if');
} else {
  console.log('else');
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/9bd8135f514a479990c6b4062cf24855'
  );
  web3 = new Web3(provider);
}

export default web3;
