# Ethereum Voting Dapp
This is Dapp sample built with Ethereum


## Install 

#### Ethereum
brew tap ethereum/ethereum

brew install ethereum

#### Truffle
npm install -g truffle

#### Ganache
npm install ganache-cli web3@0.20.2


Make project
-----------

```shell
mkdir ebay_dapp
cd ebay_dapp
truffle unbox webpack
rm contracts/ConvertLib.sol contracts/MetaCoin.sol
```
 
Run Test mode
-----------

```shell
node_modules/.bin/ganache-cli

truffle exec seed.js   run .js file by truffle
truffle console
```



Our [Git Flow](https://github.com/vobi-io/vobi-voting/blob/master/README.md)
--------------------------------------

### Linting

This project is using eslint for linting and is using the [eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) ruleset.

To ensure your code is conformant please run the following command before committing.

$ npm run lint
