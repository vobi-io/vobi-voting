Eutil = require('ethereumjs-util')
VotingStore = artifacts.require('./contracts/VotingStore.sol')
module.exports = function (callback) {
  current_time = Math.round(new Date() / 1000)
  amt_1 = web3.toWei(1, 'ether')
  VotingStore.deployed().then(function (i) { i.registerVoting('Who will be mayor of Tbilisi ?', '_descLink', 'Category', current_time, current_time + 200, ['Kakha', 'Zaali']).then(function (f) { console.log(f) }) })

  VotingStore.deployed().then(function (i) { i.votingIndex.call().then(function (f) { console.log(f) }) })
}
