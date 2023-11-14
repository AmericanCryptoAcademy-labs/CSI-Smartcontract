
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity:{
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },


  networks:{
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/FT-SuD2nj7j-tRwR7-SyyG4udd6ntqDa",
      accounts:["edd0a374fb70992c742af5ff48618adf91eb6f97656be5ed122a6fc0ff3aed3e"],
      gas:'auto'
    }
  }

};