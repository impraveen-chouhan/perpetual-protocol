/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IInflationMonitor } from "../IInflationMonitor";

export class IInflationMonitor__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInflationMonitor {
    return new Contract(address, _abi, signerOrProvider) as IInflationMonitor;
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
        name: "_amount",
        type: "tuple",
      },
    ],
    name: "appendMintedTokenHistory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isOverMintThreshold",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
