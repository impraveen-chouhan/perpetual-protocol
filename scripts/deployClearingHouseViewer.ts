import { ethers } from "hardhat";
import { ContractFullyQualifiedName } from "../publish/ContractName";

async function main() {
    const ClearingHouseAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const clearingHouse = await ethers.getContractFactory(ContractFullyQualifiedName.ClearingHouseViewer)
    // const instance = await upgrades.deployProxy(Vesting, [perpAddress])
    // await instance.deployed()
    const addressDepl = await clearingHouse.deploy(ClearingHouseAddress);
    console.log(addressDepl.address);
}

main()
