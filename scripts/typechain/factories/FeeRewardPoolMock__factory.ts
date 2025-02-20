/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FeeRewardPoolMock } from "../FeeRewardPoolMock";

export class FeeRewardPoolMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<FeeRewardPoolMock> {
    return super.deploy(overrides || {}) as Promise<FeeRewardPoolMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FeeRewardPoolMock {
    return super.attach(address) as FeeRewardPoolMock;
  }
  connect(signer: Signer): FeeRewardPoolMock__factory {
    return super.connect(signer) as FeeRewardPoolMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeRewardPoolMock {
    return new Contract(address, _abi, signerOrProvider) as FeeRewardPoolMock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FeeNotificationReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "NotificationReceived",
    type: "event",
  },
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
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "notifyStakeChanged",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610233806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063144fa6d714610051578063cd8ae3dd14610066578063fc0c546a14610079578063ff59f86d14610097575b600080fd5b61006461005f36600461015e565b6100aa565b005b61006461007436600461015e565b6100cc565b610081610106565b60405161008e91906101e0565b60405180910390f35b6100646100a536600461018c565b610115565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b7fde6106b4ff1eef31d8c6169abb52c38ca8f0a358bc60f3ce80721b127a7d88a0816040516100fb91906101e0565b60405180910390a150565b6000546001600160a01b031681565b7fbeb91d99bb37ccd6331a4211bfc09668620132857d6c33d7805fdf99cd6dd18561014d610148368490038401846101a3565b61015a565b6040516100fb91906101f4565b5190565b60006020828403121561016f578081fd5b81356001600160a01b0381168114610185578182fd5b9392505050565b60006020828403121561019d578081fd5b50919050565b6000602082840312156101b4578081fd5b6040516020810181811067ffffffffffffffff821117156101d3578283fd5b6040529135825250919050565b6001600160a01b0391909116815260200190565b9081526020019056fea264697066735822122093d04440363da71a704adb41d67cfac02ef85945a530e55e81b2c5491fbe54b764736f6c63430006090033";
