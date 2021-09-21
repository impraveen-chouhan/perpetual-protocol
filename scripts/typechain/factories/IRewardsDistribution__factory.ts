/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IRewardsDistribution } from "../IRewardsDistribution";

export class IRewardsDistribution__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRewardsDistribution {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IRewardsDistribution;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "d",
            type: "uint256",
          },
        ],
        internalType: "struct Decimal.decimal",
        name: "",
        type: "tuple",
      },
    ],
    name: "distributeRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
