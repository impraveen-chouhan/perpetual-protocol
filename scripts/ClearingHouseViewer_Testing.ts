import { ethers } from "hardhat";
//script file to communicate with the xDai Perpetual contract clearing house
export async function main() {
  const factory = await ethers.getContractFactory('src/ClearingHouseViewer.sol:ClearingHouseViewer');
  const instance = await factory.attach("0xef8093561D193d24b7677F784e41A10714E7FE25");

  console.log(".........................................................");
  // console.log("Owner Function", await instance.functions);
  console.log("========================================================");
  let margin = await instance.getPersonalPositionWithFundingPayment('0x187C938543f2BDE09Fe39034Fe3Ff797A3D35cA0', '0xA00dDcC976261D9deC7e1B5C80A8085A5ede7aBF')
  margin = margin["margin"].toString();
  return margin;
}
export default main;
// setInterval(async function () {
// }, 6000);//run this than every 600 seconds
