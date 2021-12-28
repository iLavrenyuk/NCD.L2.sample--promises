import BN from 'bn.js';
import { keyStores, Near, WalletConnection } from 'near-api-js';

export const CONTRACT_ID = 'dev-1634079752210-92309146803272';
const gas = new BN('70000000000000');

export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
});

export const wallet = new WalletConnection(near, 'promises');

export const signIn = (successUrl) => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.requestSignIn({ contractId: CONTRACT_ID, successUrl });
};

export const signOut = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.signOut(CONTRACT_ID);
};

//function  to get all  my promises
export const getPromises = (target) => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  const accountId = wallet.getAccountId();
  return wallet.account().viewFunction(CONTRACT_ID, 'getPromises', { accountId, target });
};

//function to add new promise
export const makePromise = ({ what }) => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'makePromise',
    gas,
    args: { what },
  });
};
