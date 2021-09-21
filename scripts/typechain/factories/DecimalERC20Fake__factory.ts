/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DecimalERC20Fake } from "../DecimalERC20Fake";

export class DecimalERC20Fake__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DecimalERC20Fake> {
    return super.deploy(overrides || {}) as Promise<DecimalERC20Fake>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DecimalERC20Fake {
    return super.attach(address) as DecimalERC20Fake;
  }
  connect(signer: Signer): DecimalERC20Fake__factory {
    return super.connect(signer) as DecimalERC20Fake__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DecimalERC20Fake {
    return new Contract(address, _abi, signerOrProvider) as DecimalERC20Fake;
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
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
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
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
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
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610eb7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632b8c77761461005c5780635ed283ea14610071578063927da105146100845780639577ee82146100ad578063f7888aec146100c0575b600080fd5b61006f61006a366004610ad9565b6100d3565b005b61006f61007f366004610b33565b6100f3565b610097610092366004610a8f565b610111565b6040516100a49190610e33565b60405180910390f35b61006f6100bb366004610b33565b61012c565b6100976100ce366004610a57565b610145565b6100ed8484846100e836869003860186610b7a565b610160565b50505050565b61010c838361010736859003850185610b7a565b61029b565b505050565b610119610a0d565b6101248484846103ca565b949350505050565b61010c838361014036859003850185610b7a565b610459565b61014d610a0d565b610157838361047f565b90505b92915050565b610169846104b7565b610171610a0d565b61017b858461047f565b905060006101898684610504565b905060006060876001600160a01b03166323b872dd60e01b8888866040516024016101b693929190610c19565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516101f49190610bcf565b6000604051808303816000865af19150503d8060008114610231576040519150601f19603f3d011682016040523d82523d6000602084013e610236565b606091505b50915091508180156102605750805115806102605750808060200190518101906102609190610a37565b6102855760405162461bcd60e51b815260040161027c90610d38565b60405180910390fd5b6102918887858761057a565b5050505050505050565b6102a4836104b7565b6102ac610a0d565b6102b6848461047f565b905060006102c48584610504565b905060006060866001600160a01b031663a9059cbb60e01b87856040516024016102ef929190610c3d565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161032d9190610bcf565b6000604051808303816000865af19150503d806000811461036a576040519150601f19603f3d011682016040523d82523d6000602084013e61036f565b606091505b50915091508180156103995750805115806103995750808060200190518101906103999190610a37565b6103b55760405162461bcd60e51b815260040161027c90610c89565b6103c18787858761057a565b50505050505050565b6103d2610a0d565b61012484856001600160a01b031663dd62ed3e86866040518363ffffffff1660e01b8152600401610404929190610bff565b60206040518083038186803b15801561041c57600080fd5b505afa158015610430573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104549190610bb7565b6105cd565b610462836104b7565b610474838361046f61065f565b61067a565b61010c83838361067a565b610487610a0d565b61015783846001600160a01b03166370a08231856040518263ffffffff1660e01b81526004016104049190610beb565b60006104c282610779565b6001600160a01b0383166000908152602081905260409020549091508114610500576001600160a01b03821660009081526020819052604090208190555b5050565b60008061051084610779565b90506012811061054e5761054661052e82601263ffffffff61086616565b600a0a61053a856108a8565b9063ffffffff6108ac16565b91505061015a565b61012461056260128363ffffffff61086616565b600a0a61056e856108a8565b9063ffffffff6108e616565b6105ad61059761058a86856105cd565b839063ffffffff61092816565b6105a1868661047f565b9063ffffffff61095416565b60000b156100ed5760405162461bcd60e51b815260040161027c90610df1565b6105d5610a0d565b60006105e084610779565b9050601281106106255760408051602081019091528061061a61060a84601263ffffffff61086616565b8690600a0a63ffffffff6108e616565b81525091505061015a565b60408051602081019091528061065561064560128563ffffffff61086616565b8690600a0a63ffffffff6108ac16565b9052949350505050565b610667610a0d565b5060408051602081019091526000815290565b600060606001600160a01b03851663095ea7b360e01b8561069b8887610504565b6040516024016106ac929190610c3d565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516106ea9190610bcf565b6000604051808303816000865af19150503d8060008114610727576040519150601f19603f3d011682016040523d82523d6000602084013e61072c565b606091505b50915091508180156107565750805115806107565750808060200190518101906107569190610a37565b6107725760405162461bcd60e51b815260040161027c90610dba565b5050505050565b6001600160a01b0381166000908152602081905260408120548061015a5760408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290516000916060916001600160a01b038716916107db91610bcf565b600060405180830381855afa9150503d8060008114610816576040519150601f19603f3d011682016040523d82523d6000602084013e61081b565b606091505b509150915081801561082d5750805115155b6108495760405162461bcd60e51b815260040161027c90610cf7565b8080602001905181019061085d9190610bb7565b95945050505050565b600061015783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610985565b5190565b6000826108bb5750600061015a565b828202828482816108c857fe5b04146101575760405162461bcd60e51b815260040161027c90610d79565b600061015783836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506109b1565b610930610a0d565b610938610a0d565b8251845161094b9163ffffffff6109e816565b81529392505050565b8051825160009110156109695750600161015a565b81518351101561097c575060001961015a565b50600092915050565b600081848411156109a95760405162461bcd60e51b815260040161027c9190610c56565b505050900390565b600081836109d25760405162461bcd60e51b815260040161027c9190610c56565b5060008385816109de57fe5b0495945050505050565b6000828201838110156101575760405162461bcd60e51b815260040161027c90610cc0565b6040518060200160405280600081525090565b600060208284031215610a31578081fd5b50919050565b600060208284031215610a48578081fd5b81518015158114610157578182fd5b60008060408385031215610a69578081fd5b8235610a7481610e69565b91506020830135610a8481610e69565b809150509250929050565b600080600060608486031215610aa3578081fd5b8335610aae81610e69565b92506020840135610abe81610e69565b91506040840135610ace81610e69565b809150509250925092565b60008060008060808587031215610aee578081fd5b8435610af981610e69565b93506020850135610b0981610e69565b92506040850135610b1981610e69565b9150610b288660608701610a20565b905092959194509250565b600080600060608486031215610b47578283fd5b8335610b5281610e69565b92506020840135610b6281610e69565b9150610b718560408601610a20565b90509250925092565b600060208284031215610b8b578081fd5b6040516020810181811067ffffffffffffffff82111715610baa578283fd5b6040529135825250919050565b600060208284031215610bc8578081fd5b5051919050565b60008251610be1818460208701610e3d565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6000602082528251806020840152610c75816040850160208701610e3d565b601f01601f19169190910160400192915050565b6020808252601d908201527f446563696d616c45524332303a207472616e73666572206661696c6564000000604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526021908201527f446563696d616c45524332303a2067657420646563696d616c73206661696c656040820152601960fa1b606082015260800190565b60208082526021908201527f446563696d616c45524332303a207472616e7366657246726f6d206661696c656040820152601960fa1b606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252601c908201527f446563696d616c45524332303a20617070726f7665206661696c656400000000604082015260600190565b60208082526022908201527f446563696d616c45524332303a2062616c616e636520696e636f6e73697374656040820152611b9d60f21b606082015260800190565b9051815260200190565b60005b83811015610e58578181015183820152602001610e40565b838111156100ed5750506000910152565b6001600160a01b0381168114610e7e57600080fd5b5056fea2646970667358221220e4a7bd9206a67de3d4aec31051e90a2d7b6eda869082a77d0c8f38d8d6c795d564736f6c63430006090033";
