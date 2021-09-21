/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMultiTokenRewardRecipient } from "../IMultiTokenRewardRecipient";

export class IMultiTokenRewardRecipient__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMultiTokenRewardRecipient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IMultiTokenRewardRecipient;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
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
    name: "notifyTokenAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
