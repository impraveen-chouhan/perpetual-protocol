/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IExchangeWrapper } from "../IExchangeWrapper";

export class IExchangeWrapper__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExchangeWrapper {
    return new Contract(address, _abi, signerOrProvider) as IExchangeWrapper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "outputToken",
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
        name: "inputTokenSold",
        type: "tuple",
      },
    ],
    name: "getInputPrice",
    outputs: [
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "outputToken",
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
        name: "outputTokenBought",
        type: "tuple",
      },
    ],
    name: "getOutputPrice",
    outputs: [
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "outputToken",
        type: "address",
      },
    ],
    name: "getSpotPrice",
    outputs: [
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "outputToken",
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
        name: "inputTokenSold",
        type: "tuple",
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
        name: "minOutputTokenBought",
        type: "tuple",
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
        name: "maxPrice",
        type: "tuple",
      },
    ],
    name: "swapInput",
    outputs: [
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "outputToken",
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
        name: "outputTokenBought",
        type: "tuple",
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
        name: "maxInputTokeSold",
        type: "tuple",
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
        name: "maxPrice",
        type: "tuple",
      },
    ],
    name: "swapOutput",
    outputs: [
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
    stateMutability: "nonpayable",
    type: "function",
  },
];
