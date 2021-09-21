import { ethers } from "hardhat";
//script file to communicate with the xDai Perpetual contract clearing house

let config = require('../scripts/config.json');

let dateTime = new Date(); //.toLocaleString();

async function main() {
    // This is interface for connecting contract
    const factory = await ethers.getContractFactory("src/ClearingHouse.sol:ClearingHouse");

    // This function is return all function from contract
    const instance = factory.attach(config.Contract_Address_CH);

    console.log("PositionLiquidated is listening")
    instance.on(
        "PositionLiquidated",
        (trader, amm, positionNotional, positionSize, liquidationFee, liquidator, badDebt) => {

            // Applied filter for Contract address and AMM
            if (trader == config.Trading_Address) {
                console.log('Position Liquidation time: ', dateTime);
                console.log(trader.toString())
                console.log(amm.toString())
                console.log(positionNotional.toString())
                console.log(positionSize.toString())
                console.log(liquidationFee.toString())
                console.log(liquidator.toString())
                console.log(badDebt.toString())
            }
        },
    )
}

main()
    .then(() => process.connected)
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
