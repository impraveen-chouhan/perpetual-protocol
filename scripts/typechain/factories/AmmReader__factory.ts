/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AmmReader } from "../AmmReader";

export class AmmReader__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AmmReader> {
    return super.deploy(overrides || {}) as Promise<AmmReader>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AmmReader {
    return super.attach(address) as AmmReader;
  }
  connect(signer: Signer): AmmReader__factory {
    return super.connect(signer) as AmmReader__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AmmReader {
    return new Contract(address, _abi, signerOrProvider) as AmmReader;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_amm",
        type: "address",
      },
    ],
    name: "getAmmStates",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "quoteAssetReserve",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseAssetReserve",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradeLimitRatio",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fundingPeriod",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "quoteAssetSymbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "baseAssetSymbol",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "priceFeedKey",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "priceFeed",
            type: "address",
          },
        ],
        internalType: "struct AmmReader.AmmStates",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610863806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e7f9871e14610030575b600080fd5b61004361003e3660046105c7565b610059565b6040516100509190610733565b60405180910390f35b61006161053e565b600082905060006060826001600160a01b031663fdf262b76040518163ffffffff1660e01b815260040160206040518083038186803b1580156100a357600080fd5b505afa1580156100b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100db9190610602565b60408051600481526024810182526020810180516001600160e01b03166395d89b4160e01b17905290516001600160a01b03929092169161011c9190610717565b600060405180830381855afa9150503d8060008114610157576040519150601f19603f3d011682016040523d82523d6000602084013e61015c565b606091505b509150915061016961058f565b61017161058f565b846001600160a01b03166359bf5d396040518163ffffffff1660e01b8152600401604080518083038186803b1580156101a957600080fd5b505afa1580156101bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e191906106aa565b915091506000856001600160a01b03166358a4c3dc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561022057600080fd5b505afa158015610234573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025891906105ea565b905060405180610100016040528061026f8561043d565b815260200161027d8461043d565b8152602001876001600160a01b0316638f40d9326040518163ffffffff1660e01b815260040160206040518083038186803b1580156102bb57600080fd5b505afa1580156102cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f391906105ea565b8152602001876001600160a01b03166374d7c62b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561033157600080fd5b505afa158015610345573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036991906105ea565b815260200186610388576040518060200160405280600081525061039c565b8580602001905181019061039c919061061e565b81526020016103aa83610441565b8152602001828152602001876001600160a01b031663741bef1a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103ee57600080fd5b505afa158015610402573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104269190610602565b6001600160a01b0316905298975050505050505050565b5190565b606060005b60208160ff161080156104745750828160ff166020811061046357fe5b1a60f81b6001600160f81b03191615155b1561048157600101610446565b60608160ff1667ffffffffffffffff8111801561049d57600080fd5b506040519080825280601f01601f1916602001820160405280156104c8576020820181803683370190505b50905060005b6020811080156104f657508481602081106104e557fe5b1a60f81b6001600160f81b03191615155b156105365784816020811061050757fe5b1a60f81b82828151811061051757fe5b60200101906001600160f81b031916908160001a9053506001016104ce565b509392505050565b6040518061010001604052806000815260200160008152602001600081526020016000815260200160608152602001606081526020016000801916815260200160006001600160a01b031681525090565b6040518060200160405280600081525090565b6000602082840312156105b3578081fd5b6105bd60206107be565b9151825250919050565b6000602082840312156105d8578081fd5b81356105e381610815565b9392505050565b6000602082840312156105fb578081fd5b5051919050565b600060208284031215610613578081fd5b81516105e381610815565b60006020828403121561062f578081fd5b815167ffffffffffffffff80821115610646578283fd5b81840185601f820112610657578384fd5b8051925081831115610667578384fd5b61067a601f8401601f19166020016107be565b9150828252856020848301011115610690578384fd5b6106a18360208401602084016107e5565b50949350505050565b600080604083850312156106bc578081fd5b6106c684846105a2565b91506106d584602085016105a2565b90509250929050565b6001600160a01b03169052565b600081518084526107038160208601602086016107e5565b601f01601f19169290920160200192915050565b600082516107298184602087016107e5565b9190910192915050565b6000602082528251602083015260208301516040830152604083015160608301526060830151608083015260808301516101008060a085015261077a6101208501836106eb565b60a0860151858203601f190160c0870152925061079781846106eb565b60c087015160e087015260e087015193506107b4838701856106de565b9695505050505050565b60405181810167ffffffffffffffff811182821017156107dd57600080fd5b604052919050565b60005b838110156108005781810151838201526020016107e8565b8381111561080f576000848401525b50505050565b6001600160a01b038116811461082a57600080fd5b5056fea2646970667358221220f536bbac364a97fb4f6ad39076f6147036da383daa910597c9332e8f311db60c64736f6c63430006090033";
