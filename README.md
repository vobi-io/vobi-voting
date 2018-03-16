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
mkdir vobi-voting
cd vobi-voting
truffle unbox webpack
```
 
Run Test mode
-----------

```shell
node_modules/.bin/ganache-cli
truffle console
```

Deploy contract
-----------
```shell
node_modules/.bin/ganache-cli

truffle migrate

truffle exec seed.js
```

Example deploy
-----------
```shell
truffle console

current_time = Math.round(new Date() / 1000);

Voting.deployed().then(function (i) { i.registerVoting('Who will be mayor of Tbilisi ?', '_descLink', 'Category', current_time, current_time + 200, ['Kakha', 'Zaali']).then(function (f) { console.log(f) }) })

truffle(development)>  Voting.deployed().then(function(i) {i.getVoting.call(1).then(function(f) {console.log(f)})})
```


Our [Git Flow](https://github.com/vobi-io/vobi-voting/blob/master/README.md)
--------------------------------------

### Linting

This project is using eslint for linting and is using the [eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) ruleset.

To ensure your code is conformant please run the following command before committing.

$ npm run lint
