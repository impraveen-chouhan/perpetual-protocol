//script file to communicate with the xDai Perpetual contract clearing house
// import { ethers } from "hardhat";
import { ethers } from "hardhat"
// import { obj_abi } from "abi_test.json";
async function main() {
    // const network = "xdai"
    // const provider = ethers.getDefaultProvider(network);
    // console.log('provider: ', provider);
    // // https://dai.poa.network/3da5a6fde72845118443ae99bc6b7ac5
    // const test_eathers = require('ethers');
    // const provoider = new test_eathers.currentProvider();
    // const factory = await ethers.getContractFactory("ClearingHouse");
    const factory = await ethers.getContractFactory("src/ClearingHouse.sol:ClearingHouse")
    const instance = factory.attach("0x5d9593586b4B5edBd23E7Eba8d88FD8F09D83EBd")

    console.log(".........................................................")
    console.log(await instance)
    console.log("========================================================")
    // console.log("Owner of the contract is ", await instance.owner());
    console.log("========================================================")
    const accounts = await web3.eth.getAccounts()
    console.log("Accounts: ", accounts)

    console.log("Before calling event")
    instance.on(
        "PositionLiquidated",
        (trader, amm, positionNotional, positionSize, liquidationFee, liquidator, badDebt) => {
            console.log("ON calling event")
            console.log(trader.toString())
            console.log(amm.toString())
            console.log(positionNotional.toString())
            console.log(positionSize.toString())
            console.log(liquidationFee.toString())
            console.log(liquidator.toString())
            console.log(badDebt.toString())
        },
    )
}

main()
    .then(() => process.connected)
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
