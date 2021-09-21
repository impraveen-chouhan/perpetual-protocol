import { Contract } from "@ethersproject/contracts";
import { ethers } from "hardhat";
setInterval(function () {
  const Web3 = require('web3');
  //script file to communicate with the xDai Perpetual contract clearing house
  async function main() {
    // const factory = await ethers.getContractFactory("ClearingHouse");
    const factory = await ethers.getContractFactory('src/ClearingHouseViewer.sol:ClearingHouseViewer');
    const instance = await factory.attach("0xef8093561D193d24b7677F784e41A10714E7FE25");

    console.log(".........................................................");
    // console.log("Owner Function", await instance.functions);
    console.log("========================================================");
    // console.log("Position value is ", await instance.getPersonalPositionWithFundingPayment('0x187C938543f2BDE09Fe39034Fe3Ff797A3D35cA0', '0x66B52537fE7424827Aabed1f994882bF79CF55C9'));
    // console.log("Position value is ", await instance.getPersonalPositionWithFundingPayment('0x187C938543f2BDE09Fe39034Fe3Ff797A3D35cA0', '0xA00dDcC976261D9deC7e1B5C80A8085A5ede7aBF'));
    console.log("========================================================");
    // const accounts = await web3.eth.getAccounts();

    const margin = await get_margin(instance);
    console.log('Margin : ', margin["margin"].toString());

    // console.log("Accounts: ", accounts);
    //this.setInterval();
  }

  async function get_margin(instance: Contract) {
    const margin = await instance.getPersonalPositionWithFundingPayment('0x187C938543f2BDE09Fe39034Fe3Ff797A3D35cA0', '0xA00dDcC976261D9deC7e1B5C80A8085A5ede7aBF')
    return margin;
  }

  main()
    .then(() =>
      process.connected)
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

}, 60000);//run this thang every 2 seconds
