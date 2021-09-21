/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ExchangeWrapper } from "../ExchangeWrapper";

export class ExchangeWrapper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ExchangeWrapper> {
    return super.deploy(overrides || {}) as Promise<ExchangeWrapper>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExchangeWrapper {
    return super.attach(address) as ExchangeWrapper;
  }
  connect(signer: Signer): ExchangeWrapper__factory {
    return super.connect(signer) as ExchangeWrapper__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExchangeWrapper {
    return new Contract(address, _abi, signerOrProvider) as ExchangeWrapper;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "inAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "out",
        type: "uint256",
      },
    ],
    name: "BalancerSwap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "underlyingAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cTokenAmount",
        type: "uint256",
      },
    ],
    name: "CompoundMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "underlyingAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cTokenAmount",
        type: "uint256",
      },
    ],
    name: "CompoundRedeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "perpTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdtAmount",
        type: "uint256",
      },
    ],
    name: "ExchangeSwap",
    type: "event",
  },
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
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
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "balancerPool",
    outputs: [
      {
        internalType: "contract BPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    name: "compoundCUsdt",
    outputs: [
      {
        internalType: "contract CErc20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_outputToken",
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
        name: "_inputTokenSold",
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
        name: "_inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_outputToken",
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
        name: "_outputTokenBought",
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
        name: "_inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_outputToken",
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
        internalType: "address",
        name: "_balancerPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_compoundCUsdt",
        type: "address",
      },
      {
        internalType: "address",
        name: "_perpToken",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_balancerPool",
        type: "address",
      },
    ],
    name: "setBalancerPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compoundCUsdt",
        type: "address",
      },
    ],
    name: "setCompoundCUsdt",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_outputToken",
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
        name: "_inputTokenSold",
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
        name: "_minOutputTokenBought",
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
        name: "_maxPrice",
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
        name: "_inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_outputToken",
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
        name: "_outputTokenBought",
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
        name: "_maxInputTokeSold",
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
        name: "_maxPrice",
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
  {
    inputs: [],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612d3b806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80639577ee8211610097578063c1094e5b11610066578063c1094e5b146101d7578063c643ea63146101ea578063e5e75d1e146101fd578063f1bf5b4f1461021057610100565b80639577ee8214610196578063a88b68b4146101a9578063bc5920ba146101bc578063c0c53b8b146101c457610100565b80636c8381f8116100d35780636c8381f814610169578063715018a61461017e578063776da470146101865780638da5cb5b1461018e57610100565b8063125822721461010557806313af40351461011a57806315e84af91461012d5780633396715114610156575b600080fd5b6101186101133660046124b6565b610218565b005b6101186101283660046124b6565b610359565b61014061013b36600461259f565b610432565b60405161014d9190612c7b565b60405180910390f35b610140610164366004612615565b61044d565b610171610496565b60405161014d91906126f2565b6101186104a5565b610171610524565b610171610533565b6101186101a4366004612558565b610542565b6101186101b73660046124b6565b610587565b6101186105de565b6101186101d23660046124ee565b6106a1565b6101406101e53660046125d7565b61075c565b6101406101f83660046125d7565b6107a0565b61014061020b366004612615565b6107db565b61017161081a565b610220610829565b6065546001600160a01b039081169116146102565760405162461bcd60e51b815260040161024d90612be8565b60405180910390fd5b60cd80546001600160a01b0319166001600160a01b03838116919091179182905560408051636f307dc360e01b815290519290911691636f307dc391600480820192602092909190829003018186803b1580156102b257600080fd5b505afa1580156102c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ea91906124d2565b60cf80546001600160a01b0319166001600160a01b0392831617905560cd54604080516020810190915260001981526103299291909116908190610542565b60cf5460cd5460408051602081019091526000198152610356926001600160a01b03908116921690610542565b50565b610361610829565b6065546001600160a01b0390811691161461038e5760405162461bcd60e51b815260040161024d90612be8565b6001600160a01b0381166103b45760405162461bcd60e51b815260040161024d90612a4d565b6065546001600160a01b03828116911614156103e25760405162461bcd60e51b815260040161024d90612c35565b6066546001600160a01b03828116911614156104105760405162461bcd60e51b815260040161024d9061288e565b606680546001600160a01b0319166001600160a01b0392909216919091179055565b61043a61244f565b610444838361082d565b90505b92915050565b61045561244f565b61048c868661046936889003880188612680565b61047836889003880188612680565b61048736889003880188612680565b6109e5565b9695505050505050565b6066546001600160a01b031690565b6104ad610829565b6065546001600160a01b039081169116146104da5760405162461bcd60e51b815260040161024d90612be8565b6065546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3606580546001600160a01b0319169055565b60cc546001600160a01b031681565b6065546001600160a01b031690565b61054a610829565b6065546001600160a01b039081169116146105775760405162461bcd60e51b815260040161024d90612be8565b610582838383610b5b565b505050565b61058f610829565b6065546001600160a01b039081169116146105bc5760405162461bcd60e51b815260040161024d90612be8565b60cc80546001600160a01b0319166001600160a01b0392909216919091179055565b6066546001600160a01b03166106065760405162461bcd60e51b815260040161024d90612b99565b61060e610829565b6066546001600160a01b0390811691161461063b5760405162461bcd60e51b815260040161024d906128d5565b6066546065546040516001600160a01b0392831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360668054606580546001600160a01b03199081166001600160a01b03841617909155169055565b600054610100900460ff16806106ba57506106ba610b81565b806106c8575060005460ff16155b6106e45760405162461bcd60e51b815260040161024d90612a8f565b600054610100900460ff1615801561070f576000805460ff1961ff0019909116610100171660011790555b610717610b87565b60ce80546001600160a01b0319166001600160a01b03841617905561073b84610587565b61074483610218565b8015610756576000805461ff00191690555b50505050565b61076461244f565b61076c61244f565b610776858561082d565b90506107978161078b36869003860186612680565b9063ffffffff610c1916565b95945050505050565b6107a861244f565b6107b061244f565b6107ba858561082d565b9050610797816107cf36869003860186612680565b9063ffffffff610c4516565b6107e361244f565b61048c86866107f736889003880188612680565b61080636889003880188612680565b61081536889003880188612680565b610c68565b60cd546001600160a01b031681565b3390565b61083561244f565b816001600160a01b0316836001600160a01b0316141561085e57610857610d50565b9050610447565b600061086984610d74565b9050600061087684610d74565b60cc546040516315e84af960e01b81529192506000916001600160a01b03909116906315e84af9906108ae9086908690600401612706565b60206040518083038186803b1580156108c657600080fd5b505afa1580156108da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fe919061269b565b905061090861244f565b506040805160208101909152818152600061092285610d9e565b9050600061092f85610d9e565b9050808210156109525761094b8661094685610e82565b610e86565b9250610974565b8082111561097457604051806020016040528061096f8786610f18565b905292505b61097d89610f96565b156109af576109a2610995610990610d50565b610fbf565b849063ffffffff610c1916565b9650505050505050610447565b6109b888610f96565b156109d8576109a26109cb610990610d50565b849063ffffffff610c4516565b5090979650505050505050565b6109ed61244f565b60006109f7610829565b9050610a0161244f565b5084610a0c87610f96565b15610a1d57610a1a816110af565b90505b6000610a2889610d74565b90506000610a3589610d74565b9050610a3f61244f565b610a4a8383866111a4565b90506000610a5e898363ffffffff6114ef16565b60000b1215610a7f5760405162461bcd60e51b815260040161024d90612add565b610a888b610f96565b15610abc57610a9561244f565b610a9e82610fbf565b9050610aac8c873084611520565b610ab581611652565b5050610ac8565b610ac88b863084611520565b610ad061244f565b610add8484878c8c61177a565b9050610ae88b610f96565b15610af857610af68a611983565b505b7f4d207a2df21cff761d39dd1942c4370b71074291874855081465c54e12987ab2610b2282610e82565b610b2b8c610e82565b604051610b39929190612c8e565b60405180910390a1610b4c8b878c611a9c565b9b9a5050505050505050505050565b610b6483611bcb565b610b768383610b71611c18565b611c33565b610582838383611c33565b303b1590565b600054610100900460ff1680610ba05750610ba0610b81565b80610bae575060005460ff16155b610bca5760405162461bcd60e51b815260040161024d90612a8f565b600054610100900460ff16158015610bf5576000805460ff1961ff0019909116610100171660011790555b610bfd611d32565b610c05611db3565b8015610356576000805461ff001916905550565b610c2161244f565b610c2961244f565b82518451610c3c9163ffffffff611e8d16565b81529392505050565b610c4d61244f565b610c5561244f565b82518451610c3c9163ffffffff611e9b16565b610c7061244f565b6000610c7a610829565b9050610c8461244f565b5084610c9288833084611520565b610c9b88610f96565b15610cac57610ca981611652565b90505b6000610cb789610d74565b90506000610cc489610d74565b9050610cd38282858a8a611ea9565b9450610cde89610f96565b15610cef57610cec856120ac565b94505b7f4d207a2df21cff761d39dd1942c4370b71074291874855081465c54e12987ab2610d1989610e82565b610d2287610e82565b604051610d30929190612c8e565b60405180910390a1610d43898587611a9c565b5050505095945050505050565b610d5861244f565b6040518060200160405280610d6d60126121c5565b9052905090565b6000610d7f82610f96565b15610d96575060cd546001600160a01b0316610d99565b50805b919050565b6001600160a01b038116600090815260996020526040812054806104475760408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290516000916060916001600160a01b03871691610e00916126d6565b600060405180830381855afa9150503d8060008114610e3b576040519150601f19603f3d011682016040523d82523d6000602084013e610e40565b606091505b5091509150818015610e525750805115155b610e6e5760405162461bcd60e51b815260040161024d9061291c565b80806020019051810190610797919061269b565b5190565b610e8e61244f565b6000610e9984610d9e565b905060128110610ede57604080516020810190915280610ed3610ec384601263ffffffff6121ce16565b8690600a0a63ffffffff61221016565b815250915050610447565b604080516020810190915280610f0e610efe60128563ffffffff6121ce16565b8690600a0a63ffffffff61225216565b9052949350505050565b600080610f2484610d9e565b905060128110610f6257610f5a610f4282601263ffffffff6121ce16565b600a0a610f4e85610e82565b9063ffffffff61225216565b915050610447565b610f8e610f7660128363ffffffff6121ce16565b600a0a610f8285610e82565b9063ffffffff61221016565b949350505050565b60cf546000906001600160a01b0383811691161415610fb757506001610d99565b506000919050565b610fc761244f565b60cd546040805163182df0f560e01b815290516000926001600160a01b03169163182df0f5916004808301926020929190829003018186803b15801561100c57600080fd5b505afa158015611020573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611044919061269b565b60cd54909150600090611060906001600160a01b031685610f18565b905061106a61244f565b60408051602080820183528582528251908101909252838252611093919063ffffffff610c1916565b60cf54909150610797906001600160a01b031661094683610e82565b6110b761244f565b60cd546040805163182df0f560e01b815290516000926001600160a01b03169163182df0f5916004808301926020929190829003018186803b1580156110fc57600080fd5b505afa158015611110573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611134919061269b565b60cf54909150600090611150906001600160a01b031685610f18565b9050600061118b611186604051806020016040528086815250604051806020016040528086815250610c4590919063ffffffff16565b610e82565b60cd54909150610797906001600160a01b031682610e86565b6111ac61244f565b60006111b88484610f18565b60cc54604051634a46c67360e11b81529192506000916001600160a01b039091169063948d8ce6906111ee9089906004016126f2565b60206040518083038186803b15801561120657600080fd5b505afa15801561121a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123e919061269b565b60cc54604051634a46c67360e11b81529192506000916001600160a01b039091169063948d8ce6906112749089906004016126f2565b60206040518083038186803b15801561128c57600080fd5b505afa1580156112a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c4919061269b565b60cc5460405163f8b2cb4f60e01b81529192506000916001600160a01b039091169063f8b2cb4f906112fa908b906004016126f2565b60206040518083038186803b15801561131257600080fd5b505afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a919061269b565b60cc5460405163f8b2cb4f60e01b81529192506000916001600160a01b039091169063f8b2cb4f90611380908b906004016126f2565b60206040518083038186803b15801561139857600080fd5b505afa1580156113ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d0919061269b565b60cc5460408051631a995bed60e31b815290519293506000926001600160a01b039092169163f8d6aed4918691899187918a918d91889163d4cadf68916004808301926020929190829003018186803b15801561142c57600080fd5b505afa158015611440573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611464919061269b565b6040518763ffffffff1660e01b815260040161148596959493929190612c9c565b60206040518083038186803b15801561149d57600080fd5b505afa1580156114b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d5919061269b565b90506114e18a82610e86565b9a9950505050505050505050565b80518251600091101561150457506001610447565b8151835110156115175750600019610447565b50600092915050565b61152984611bcb565b61153161244f565b61153b858461228c565b905060006115498684610f18565b905060006060876001600160a01b03166323b872dd60e01b88888660405160240161157693929190612720565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516115b491906126d6565b6000604051808303816000865af19150503d80600081146115f1576040519150601f19603f3d011682016040523d82523d6000602084013e6115f6565b606091505b50915091508180156116205750805115806116205750808060200190518101906116209190612538565b61163c5760405162461bcd60e51b815260040161024d9061295d565b61164888878587612314565b5050505050505050565b61165a61244f565b60cf54600090611673906001600160a01b031684610f18565b60cd5460405163140e25ad60e31b81529192506001600160a01b03169063a0712d68906116a4908490600401612c85565b602060405180830381600087803b1580156116be57600080fd5b505af11580156116d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116f6919061269b565b156117135760405162461bcd60e51b815260040161024d906127fb565b61171c836110af565b60cd54909250600090611738906001600160a01b031684610f18565b90507f90ec39b150bfc67e537a72a995ebf5ed1b2cbcc539d9bc14663ec0929f34c8dc828260405161176b929190612c8e565b60405180910390a15050919050565b61178261244f565b61178b82610e82565b6118495760cc546040516315e84af960e01b81526000916001600160a01b0316906315e84af9906117c2908a908a90600401612706565b60206040518083038186803b1580156117da57600080fd5b505afa1580156117ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611812919061269b565b60408051602080820183526710a741a462780000825282519081019092528282529192506118459163ffffffff610c1916565b9250505b60cc546118619087906001600160a01b031685610b5b565b600061186d8686610f18565b9050600061187b8886610f18565b60cc549091506000906001600160a01b0316637c5e9ea48a848b8761189f8b610e82565b6040518663ffffffff1660e01b81526004016118bf95949392919061275d565b6040805180830381600087803b1580156118d857600080fd5b505af11580156118ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061191091906126b3565b509050600081116119335760405162461bcd60e51b815260040161024d9061299e565b7f5a2918a4a5efad0965538e4174082c1735d6560ca02b36fc71d20cfeb214e1018184604051611964929190612c8e565b60405180910390a16119768982610e86565b9998505050505050505050565b61198b61244f565b60cf546000906119a4906001600160a01b031684610f18565b60cd5460405163852a12e360e01b81529192506001600160a01b03169063852a12e3906119d5908490600401612c85565b602060405180830381600087803b1580156119ef57600080fd5b505af1158015611a03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a27919061269b565b15611a445760405162461bcd60e51b815260040161024d906129d5565b611a4d836110af565b60cd54909250600090611a69906001600160a01b031684610f18565b90507f2d26d399c8dd50eff4a9c5d5f8ba42cef4e7fa01b2657e6ac8d80118908486ed828260405161176b929190612c8e565b611aa583611bcb565b611aad61244f565b611ab7848461228c565b90506000611ac58584610f18565b905060006060866001600160a01b031663a9059cbb60e01b8785604051602401611af0929190612744565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611b2e91906126d6565b6000604051808303816000865af19150503d8060008114611b6b576040519150601f19603f3d011682016040523d82523d6000602084013e611b70565b606091505b5091509150818015611b9a575080511580611b9a575080806020019051810190611b9a9190612538565b611bb65760405162461bcd60e51b815260040161024d906127c4565b611bc287878587612314565b50505050505050565b6000611bd682610d9e565b6001600160a01b0383166000908152609960205260409020549091508114611c14576001600160a01b03821660009081526099602052604090208190555b5050565b611c2061244f565b5060408051602081019091526000815290565b600060606001600160a01b03851663095ea7b360e01b85611c548887610f18565b604051602401611c65929190612744565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611ca391906126d6565b6000604051808303816000865af19150503d8060008114611ce0576040519150601f19603f3d011682016040523d82523d6000602084013e611ce5565b606091505b5091509150818015611d0f575080511580611d0f575080806020019051810190611d0f9190612538565b611d2b5760405162461bcd60e51b815260040161024d90612b20565b5050505050565b600054610100900460ff1680611d4b5750611d4b610b81565b80611d59575060005460ff16155b611d755760405162461bcd60e51b815260040161024d90612a8f565b600054610100900460ff16158015610c05576000805460ff1961ff0019909116610100171660011790558015610356576000805461ff001916905550565b600054610100900460ff1680611dcc5750611dcc610b81565b80611dda575060005460ff16155b611df65760405162461bcd60e51b815260040161024d90612a8f565b600054610100900460ff16158015611e21576000805460ff1961ff0019909116610100171660011790555b6000611e2b610829565b606580546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610356576000805461ff001916905550565b600061044483836012612367565b600061044483836012612385565b611eb161244f565b611eba82610e82565b611f785760cc546040516315e84af960e01b81526000916001600160a01b0316906315e84af990611ef1908a908a90600401612706565b60206040518083038186803b158015611f0957600080fd5b505afa158015611f1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f41919061269b565b60408051602080820183526710a741a46278000082528251908101909252828252919250611f749163ffffffff610c1916565b9250505b60cc54611f909087906001600160a01b031686610b5b565b6000611f9c8786610f18565b60cc549091506000906001600160a01b0316638201aa3f89848a611fc0818b610f18565b611fc98a610e82565b6040518663ffffffff1660e01b8152600401611fe995949392919061275d565b6040805180830381600087803b15801561200257600080fd5b505af1158015612016573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061203a91906126b3565b5090506000811161205d5760405162461bcd60e51b815260040161024d9061299e565b7f5a2918a4a5efad0965538e4174082c1735d6560ca02b36fc71d20cfeb214e101828260405161208e929190612c8e565b60405180910390a16120a08782610e86565b98975050505050505050565b6120b461244f565b60cd546000906120cd906001600160a01b031684610f18565b60cd5460405163db006a7560e01b81529192506001600160a01b03169063db006a75906120fe908490600401612c85565b602060405180830381600087803b15801561211857600080fd5b505af115801561212c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612150919061269b565b1561216d5760405162461bcd60e51b815260040161024d90612828565b61217683610fbf565b60cf54909250600090612192906001600160a01b031684610f18565b90507f2d26d399c8dd50eff4a9c5d5f8ba42cef4e7fa01b2657e6ac8d80118908486ed818360405161176b929190612c8e565b60ff16600a0a90565b600061044483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506123a4565b600061044483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506123d0565b60008261226157506000610447565b8282028284828161226e57fe5b04146104445760405162461bcd60e51b815260040161024d90612a0c565b61229461244f565b61044483846001600160a01b03166370a08231856040518263ffffffff1660e01b81526004016122c491906126f2565b60206040518083038186803b1580156122dc57600080fd5b505afa1580156122f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610946919061269b565b6123476123316123248685610e86565b839063ffffffff61240716565b61233b868661228c565b9063ffffffff6114ef16565b60000b156107565760405162461bcd60e51b815260040161024d90612b57565b6000610f8e612375836121c5565b610f82868663ffffffff61225216565b6000610f8e83610f82612397856121c5565b879063ffffffff61225216565b600081848411156123c85760405162461bcd60e51b815260040161024d9190612791565b505050900390565b600081836123f15760405162461bcd60e51b815260040161024d9190612791565b5060008385816123fd57fe5b0495945050505050565b61240f61244f565b61241761244f565b82518451610c3c9163ffffffff61242a16565b6000828201838110156104445760405162461bcd60e51b815260040161024d90612857565b6040518060200160405280600081525090565b600060208284031215612473578081fd5b50919050565b60006020828403121561248a578081fd5b6040516020810181811067ffffffffffffffff821117156124a9578283fd5b6040529135825250919050565b6000602082840312156124c7578081fd5b813561044481612cf0565b6000602082840312156124e3578081fd5b815161044481612cf0565b600080600060608486031215612502578182fd5b833561250d81612cf0565b9250602084013561251d81612cf0565b9150604084013561252d81612cf0565b809150509250925092565b600060208284031215612549578081fd5b81518015158114610444578182fd5b60008060006060848603121561256c578283fd5b833561257781612cf0565b9250602084013561258781612cf0565b91506125968560408601612479565b90509250925092565b600080604083850312156125b1578182fd5b82356125bc81612cf0565b915060208301356125cc81612cf0565b809150509250929050565b6000806000606084860312156125eb578283fd5b83356125f681612cf0565b9250602084013561260681612cf0565b91506125968560408601612462565b600080600080600060a0868803121561262c578081fd5b853561263781612cf0565b9450602086013561264781612cf0565b93506126568760408801612462565b92506126658760608801612462565b91506126748760808801612462565b90509295509295909350565b600060208284031215612691578081fd5b6104448383612479565b6000602082840312156126ac578081fd5b5051919050565b600080604083850312156126c5578182fd5b505080516020909101519092909150565b600082516126e8818460208701612cc4565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03958616815260208101949094529190931660408301526060820192909252608081019190915260a00190565b60006020825282518060208401526127b0816040850160208701612cc4565b601f01601f19169190910160400192915050565b6020808252601d908201527f446563696d616c45524332303a207472616e73666572206661696c6564000000604082015260600190565b60208082526013908201527221b7b6b837bab7321036b4b73a1032b93937b960691b604082015260600190565b60208082526015908201527421b7b6b837bab732103932b232b2b69032b93937b960591b604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526027908201527f5065727046694f776e61626c65557067726164653a2073616d652061732063616040820152666e64696461746560c81b606082015260800190565b60208082526027908201527f5065727046694f776e61626c65557067726164653a206e6f7420746865206e656040820152663b9037bbb732b960c91b606082015260800190565b60208082526021908201527f446563696d616c45524332303a2067657420646563696d616c73206661696c656040820152601960fa1b606082015260800190565b60208082526021908201527f446563696d616c45524332303a207472616e7366657246726f6d206661696c656040820152601960fa1b606082015260800190565b60208082526017908201527f42616c616e6365722065786368616e6765206572726f72000000000000000000604082015260600190565b6020808252601f908201527f436f6d706f756e642072656465656d556e6465726c79696e67206572726f7200604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b60208082526022908201527f5065727046694f776e61626c65557067726164653a207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526023908201527f6d617820696e70757420616d6f756e74206c657373207468616e2065787065636040820152621d195960ea1b606082015260800190565b6020808252601c908201527f446563696d616c45524332303a20617070726f7665206661696c656400000000604082015260600190565b60208082526022908201527f446563696d616c45524332303a2062616c616e636520696e636f6e73697374656040820152611b9d60f21b606082015260800190565b6020808252602f908201527f5065727046694f776e61626c65557067726164653a2063616e6469646174652060408201526e6973207a65726f206164647265737360881b606082015260800190565b6020808252602d908201527f5065727046694f776e61626c65557067726164653a2063616c6c65722069732060408201526c3737ba103a34329037bbb732b960991b606082015260800190565b60208082526026908201527f5065727046694f776e61626c65557067726164653a2073616d65206173206f726040820152651a59da5b985b60d21b606082015260800190565b9051815260200190565b90815260200190565b918252602082015260400190565b958652602086019490945260408501929092526060840152608083015260a082015260c00190565b60005b83811015612cdf578181015183820152602001612cc7565b838111156107565750506000910152565b6001600160a01b038116811461035657600080fdfea26469706673582212205664c3c98c927eaf7e18d977fe80e4ede3dd463c96af075c45f1d17e36b7a42064736f6c63430006090033";
