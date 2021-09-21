/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OwnerPausableUpgradeSafe } from "../OwnerPausableUpgradeSafe";

export class OwnerPausableUpgradeSafe__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OwnerPausableUpgradeSafe> {
    return super.deploy(overrides || {}) as Promise<OwnerPausableUpgradeSafe>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OwnerPausableUpgradeSafe {
    return super.attach(address) as OwnerPausableUpgradeSafe;
  }
  connect(signer: Signer): OwnerPausableUpgradeSafe__factory {
    return super.connect(signer) as OwnerPausableUpgradeSafe__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnerPausableUpgradeSafe {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnerPausableUpgradeSafe;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "candidate",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061073d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063715018a61161005b578063715018a6146100fd5780638456cb59146101055780638da5cb5b1461010d578063bc5920ba1461011557610088565b806313af40351461008d5780633f4ba83a146100b55780635c975abb146100bd5780636c8381f8146100d9575b600080fd5b6100b3600480360360208110156100a357600080fd5b50356001600160a01b031661011d565b005b6100b3610272565b6100c56102d0565b604080519115158252519081900360200190f35b6100e16102d9565b604080516001600160a01b039092168252519081900360200190f35b6100b36102e8565b6100b3610386565b6100e16103e2565b6100b36103f1565b6101256104f2565b6065546001600160a01b039081169116146101715760405162461bcd60e51b815260040180806020018281038252602d8152602001806106b5602d913960400191505060405180910390fd5b6001600160a01b0381166101b65760405162461bcd60e51b81526004018080602001828103825260228152602001806106646022913960400191505060405180910390fd5b6065546001600160a01b03828116911614156102035760405162461bcd60e51b81526004018080602001828103825260268152602001806106e26026913960400191505060405180910390fd5b6066546001600160a01b03828116911614156102505760405162461bcd60e51b81526004018080602001828103825260278152602001806106166027913960400191505060405180910390fd5b606680546001600160a01b0319166001600160a01b0392909216919091179055565b61027a6104f2565b6065546001600160a01b039081169116146102c65760405162461bcd60e51b815260040180806020018281038252602d8152602001806106b5602d913960400191505060405180910390fd5b6102ce6104f6565b565b60995460ff1690565b6066546001600160a01b031690565b6102f06104f2565b6065546001600160a01b0390811691161461033c5760405162461bcd60e51b815260040180806020018281038252602d8152602001806106b5602d913960400191505060405180910390fd5b6065546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3606580546001600160a01b0319169055565b61038e6104f2565b6065546001600160a01b039081169116146103da5760405162461bcd60e51b815260040180806020018281038252602d8152602001806106b5602d913960400191505060405180910390fd5b6102ce610594565b6065546001600160a01b031690565b6066546001600160a01b03166104385760405162461bcd60e51b815260040180806020018281038252602f815260200180610686602f913960400191505060405180910390fd5b6104406104f2565b6066546001600160a01b0390811691161461048c5760405162461bcd60e51b815260040180806020018281038252602781526020018061063d6027913960400191505060405180910390fd5b6066546065546040516001600160a01b0392831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360668054606580546001600160a01b03199081166001600160a01b03841617909155169055565b3390565b60995460ff16610544576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6099805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6105776104f2565b604080516001600160a01b039092168252519081900360200190a1565b60995460ff16156105df576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6099805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586105776104f256fe5065727046694f776e61626c65557067726164653a2073616d652061732063616e6469646174655065727046694f776e61626c65557067726164653a206e6f7420746865206e6577206f776e65725065727046694f776e61626c65557067726164653a207a65726f20616464726573735065727046694f776e61626c65557067726164653a2063616e646964617465206973207a65726f20616464726573735065727046694f776e61626c65557067726164653a2063616c6c6572206973206e6f7420746865206f776e65725065727046694f776e61626c65557067726164653a2073616d65206173206f726967696e616ca26469706673582212204e48a85c189e18302e9149b89318d946f6e3f95a9ea145b2ec52e0dd28fe5e0e64736f6c63430006090033";
