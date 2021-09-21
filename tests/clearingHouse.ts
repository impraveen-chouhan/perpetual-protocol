import { ethers, expect } from "hardhat";

describe("Clearing House tests", () => {
  test("Getting_Margin", async () => {
    const factory = await ethers.getContractFactory('src/ClearingHouseViewer.sol:ClearingHouseViewer');
    const instance = await factory.attach("0xef8093561D193d24b7677F784e41A10714E7FE25");

    const margin = await instance.getPersonalPositionWithFundingPayment('0x187C938543f2BDE09Fe39034Fe3Ff797A3D35cA0', '0xA00dDcC976261D9deC7e1B5C80A8085A5ede7aBF')
    margin["margin"].toString();
    expect(margin["margin"].toString() != null);
  });
});

