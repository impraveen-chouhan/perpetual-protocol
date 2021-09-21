import { ethers } from "hardhat";

let config = require('../scripts/config.json');

let dateTime = new Date().toLocaleString();

var amm_address_arr = config.AMM_Address.split(',');
console.log('amm_address_arr', amm_address_arr);
// SetInterval function using for get margin in every 600 Second
setInterval(async function () {

  //script file to communicate with the xDai Perpetual contract clearing house
  async function main() {

    // This is interface for connecting contract
    const factory = await ethers.getContractFactory('src/ClearingHouseViewer.sol:ClearingHouseViewer');

    // This function is return all function from contract
    const instance = await factory.attach(config.Contract_Address_CHV);

    // Now we are getting Margin
    amm_address_arr.forEach(async function (value: string) {
      console.log('value', value);
      let margin = await instance.getPersonalPositionWithFundingPayment(value, config.Trading_Address)

      margin = margin["margin"].toString();
      console.log('margin: ', margin);
      console.log('Amm Address: ', value);
      console.log('=========================');
    });

  }



  const margin = await main();
  // console.log('Margin : ', margin);

}, 6000);
