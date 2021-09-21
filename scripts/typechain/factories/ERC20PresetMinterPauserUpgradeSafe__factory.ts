/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20PresetMinterPauserUpgradeSafe } from "../ERC20PresetMinterPauserUpgradeSafe";

export class ERC20PresetMinterPauserUpgradeSafe__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC20PresetMinterPauserUpgradeSafe> {
    return super.deploy(
      overrides || {}
    ) as Promise<ERC20PresetMinterPauserUpgradeSafe>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20PresetMinterPauserUpgradeSafe {
    return super.attach(address) as ERC20PresetMinterPauserUpgradeSafe;
  }
  connect(signer: Signer): ERC20PresetMinterPauserUpgradeSafe__factory {
    return super.connect(signer) as ERC20PresetMinterPauserUpgradeSafe__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PresetMinterPauserUpgradeSafe {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20PresetMinterPauserUpgradeSafe;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611f0a806100206000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d539139314610667578063d547741f1461066f578063dd62ed3e1461069b578063e63ab1e9146106c9576101c4565b8063a457c2d7146105f2578063a9059cbb1461061e578063ca15c8731461064a576101c4565b80639010d07c116100d35780639010d07c1461057757806391d14854146105b657806395d89b41146105e2578063a217fddf146105ea576101c4565b806370a082311461051d57806379cc6790146105435780638456cb591461056f576101c4565b806336568abe1161016657806340c10f191161014057806340c10f191461039f57806342966c68146103cb5780634cd88b76146103e85780635c975abb14610515576101c4565b806336568abe1461033f578063395093511461036b5780633f4ba83a14610397576101c4565b806323b872dd116101a257806323b872dd146102a0578063248a9ca3146102d65780632f2ff15d146102f3578063313ce56714610321576101c4565b806306fdde03146101c9578063095ea7b31461024657806318160ddd14610286575b600080fd5b6101d16106d1565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561020b5781810151838201526020016101f3565b50505050905090810190601f1680156102385780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102726004803603604081101561025c57600080fd5b506001600160a01b038135169060200135610768565b604080519115158252519081900360200190f35b61028e610786565b60408051918252519081900360200190f35b610272600480360360608110156102b657600080fd5b506001600160a01b0381358116916020810135909116906040013561078c565b61028e600480360360208110156102ec57600080fd5b5035610819565b61031f6004803603604081101561030957600080fd5b50803590602001356001600160a01b031661082e565b005b61032961089a565b6040805160ff9092168252519081900360200190f35b61031f6004803603604081101561035557600080fd5b50803590602001356001600160a01b03166108a3565b6102726004803603604081101561038157600080fd5b506001600160a01b038135169060200135610904565b61031f610958565b61031f600480360360408110156103b557600080fd5b506001600160a01b0381351690602001356109c9565b61031f600480360360208110156103e157600080fd5b5035610a3a565b61031f600480360360408110156103fe57600080fd5b81019060208101813564010000000081111561041957600080fd5b82018360208201111561042b57600080fd5b8035906020019184600183028401116401000000008311171561044d57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156104a057600080fd5b8201836020820111156104b257600080fd5b803590602001918460018302840111640100000000831117156104d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a4e945050505050565b610272610a58565b61028e6004803603602081101561053357600080fd5b50356001600160a01b0316610a61565b61031f6004803603604081101561055957600080fd5b506001600160a01b038135169060200135610a7c565b61031f610adc565b61059a6004803603604081101561058d57600080fd5b5080359060200135610b4b565b604080516001600160a01b039092168252519081900360200190f35b610272600480360360408110156105cc57600080fd5b50803590602001356001600160a01b0316610b70565b6101d1610b8e565b61028e610bef565b6102726004803603604081101561060857600080fd5b506001600160a01b038135169060200135610bf4565b6102726004803603604081101561063457600080fd5b506001600160a01b038135169060200135610c62565b61028e6004803603602081101561066057600080fd5b5035610c76565b61028e610c8d565b61031f6004803603604081101561068557600080fd5b50803590602001356001600160a01b0316610cb0565b61028e600480360360408110156106b157600080fd5b506001600160a01b0381358116916020013516610d09565b61028e610d34565b609a8054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561075d5780601f106107325761010080835404028352916020019161075d565b820191906000526020600020905b81548152906001019060200180831161074057829003601f168201915b505050505090505b90565b600061077c610775610d57565b8484610d5b565b5060015b92915050565b60995490565b6000610799848484610e47565b61080f846107a5610d57565b61080a85604051806060016040528060288152602001611d06602891396001600160a01b038a166000908152609860205260408120906107e3610d57565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610fb016565b610d5b565b5060019392505050565b60009081526065602052604090206002015490565b6000828152606560205260409020600201546108519061084c610d57565b610b70565b61088c5760405162461bcd60e51b815260040180806020018281038252602f815260200180611c04602f913960400191505060405180910390fd5b6108968282611047565b5050565b609c5460ff1690565b6108ab610d57565b6001600160a01b0316816001600160a01b0316146108fa5760405162461bcd60e51b815260040180806020018281038252602f815260200180611e7c602f913960400191505060405180910390fd5b61089682826110b6565b600061077c610911610d57565b8461080a8560986000610922610d57565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61112516565b604080516a5041555345525f524f4c4560a81b8152905190819003600b0190206109849061084c610d57565b6109bf5760405162461bcd60e51b8152600401808060200182810382526039815260200180611c556039913960400191505060405180910390fd5b6109c761117f565b565b604080516a4d494e5445525f524f4c4560a81b8152905190819003600b0190206109f59061084c610d57565b610a305760405162461bcd60e51b8152600401808060200182810382526036815260200180611d2e6036913960400191505060405180910390fd5b610896828261121d565b610a4b610a45610d57565b8261131b565b50565b6108968282611423565b60fb5460ff1690565b6001600160a01b031660009081526097602052604090205490565b6000610ab982604051806060016040528060248152602001611d9260249139610aac86610aa7610d57565b610d09565b919063ffffffff610fb016565b9050610acd83610ac7610d57565b83610d5b565b610ad7838361131b565b505050565b604080516a5041555345525f524f4c4560a81b8152905190819003600b019020610b089061084c610d57565b610b435760405162461bcd60e51b8152600401808060200182810382526037815260200180611e206037913960400191505060405180910390fd5b6109c7611502565b6000828152606560205260408120610b69908363ffffffff61158316565b9392505050565b6000828152606560205260408120610b69908363ffffffff61158f16565b609b8054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561075d5780601f106107325761010080835404028352916020019161075d565b600081565b600061077c610c01610d57565b8461080a85604051806060016040528060258152602001611e576025913960986000610c2b610d57565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610fb016565b600061077c610c6f610d57565b8484610e47565b6000818152606560205260408120610780906115a4565b604080516a4d494e5445525f524f4c4560a81b8152905190819003600b01902081565b600082815260656020526040902060020154610cce9061084c610d57565b6108fa5760405162461bcd60e51b8152600401808060200182810382526030815260200180611cd66030913960400191505060405180910390fd5b6001600160a01b03918216600090815260986020908152604080832093909416825291909152205490565b604080516a5041555345525f524f4c4560a81b8152905190819003600b01902081565b3390565b6001600160a01b038316610da05760405162461bcd60e51b8152600401808060200182810382526024815260200180611dfc6024913960400191505060405180910390fd5b6001600160a01b038216610de55760405162461bcd60e51b8152600401808060200182810382526022815260200180611c8e6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260986020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610e8c5760405162461bcd60e51b8152600401808060200182810382526025815260200180611dd76025913960400191505060405180910390fd5b6001600160a01b038216610ed15760405162461bcd60e51b8152600401808060200182810382526023815260200180611be16023913960400191505060405180910390fd5b610edc8383836115af565b610f1f81604051806060016040528060268152602001611cb0602691396001600160a01b038616600090815260976020526040902054919063ffffffff610fb016565b6001600160a01b038085166000908152609760205260408082209390935590841681522054610f54908263ffffffff61112516565b6001600160a01b0380841660008181526097602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561103f5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611004578181015183820152602001610fec565b50505050905090810190601f1680156110315780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828152606560205260409020611065908263ffffffff6115ba16565b1561089657611072610d57565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526065602052604090206110d4908263ffffffff6115cf16565b15610896576110e1610d57565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b600082820183811015610b69576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60fb5460ff166111cd576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b60fb805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611200610d57565b604080516001600160a01b039092168252519081900360200190a1565b6001600160a01b038216611278576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611284600083836115af565b609954611297908263ffffffff61112516565b6099556001600160a01b0382166000908152609760205260409020546112c3908263ffffffff61112516565b6001600160a01b03831660008181526097602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0382166113605760405162461bcd60e51b8152600401808060200182810382526021815260200180611db66021913960400191505060405180910390fd5b61136c826000836115af565b6113af81604051806060016040528060228152602001611c33602291396001600160a01b038516600090815260976020526040902054919063ffffffff610fb016565b6001600160a01b0383166000908152609760205260409020556099546113db908263ffffffff6115e416565b6099556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600054610100900460ff168061143c575061143c611626565b8061144a575060005460ff16155b6114855760405162461bcd60e51b815260040180806020018281038252602e815260200180611d64602e913960400191505060405180910390fd5b600054610100900460ff161580156114b0576000805460ff1961ff0019909116610100171660011790555b6114b861162c565b6114c061162c565b6114ca83836116cd565b6114d261162c565b6114da6117a5565b6114e261162c565b6114ec8383611850565b8015610ad7576000805461ff0019169055505050565b60fb5460ff161561154d576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b60fb805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611200610d57565b6000610b698383611947565b6000610b69836001600160a01b0384166119ab565b6000610780826119c3565b610ad78383836119c7565b6000610b69836001600160a01b038416611a16565b6000610b69836001600160a01b038416611a60565b6000610b6983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610fb0565b303b1590565b600054610100900460ff16806116455750611645611626565b80611653575060005460ff16155b61168e5760405162461bcd60e51b815260040180806020018281038252602e815260200180611d64602e913960400191505060405180910390fd5b600054610100900460ff161580156116b9576000805460ff1961ff0019909116610100171660011790555b8015610a4b576000805461ff001916905550565b600054610100900460ff16806116e657506116e6611626565b806116f4575060005460ff16155b61172f5760405162461bcd60e51b815260040180806020018281038252602e815260200180611d64602e913960400191505060405180910390fd5b600054610100900460ff1615801561175a576000805460ff1961ff0019909116610100171660011790555b825161176d90609a906020860190611b26565b50815161178190609b906020850190611b26565b50609c805460ff191660121790558015610ad7576000805461ff0019169055505050565b600054610100900460ff16806117be57506117be611626565b806117cc575060005460ff16155b6118075760405162461bcd60e51b815260040180806020018281038252602e815260200180611d64602e913960400191505060405180910390fd5b600054610100900460ff16158015611832576000805460ff1961ff0019909116610100171660011790555b60fb805460ff191690558015610a4b576000805461ff001916905550565b600054610100900460ff16806118695750611869611626565b80611877575060005460ff16155b6118b25760405162461bcd60e51b815260040180806020018281038252602e815260200180611d64602e913960400191505060405180910390fd5b600054610100900460ff161580156118dd576000805460ff1961ff0019909116610100171660011790555b6118ef60006118ea610d57565b61088c565b604080516a4d494e5445525f524f4c4560a81b8152905190819003600b01902061191b906118ea610d57565b604080516a5041555345525f524f4c4560a81b8152905190819003600b0190206114ec906118ea610d57565b815460009082106119895760405162461bcd60e51b8152600401808060200182810382526022815260200180611bbf6022913960400191505060405180910390fd5b82600001828154811061199857fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b6119d2838383610ad7565b6119da610a58565b15610ad75760405162461bcd60e51b815260040180806020018281038252602a815260200180611eab602a913960400191505060405180910390fd5b6000611a2283836119ab565b611a5857508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610780565b506000610780565b60008181526001830160205260408120548015611b1c5783546000198083019190810190600090879083908110611a9357fe5b9060005260206000200154905080876000018481548110611ab057fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611ae057fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610780565b6000915050610780565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611b6757805160ff1916838001178555611b94565b82800160010185558215611b94579182015b82811115611b94578251825591602001919060010190611b79565b50611ba0929150611ba4565b5090565b61076591905b80821115611ba05760008155600101611baa56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e647345524332303a207472616e7366657220746f20746865207a65726f2061646472657373416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e7445524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20756e706175736545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332305072657365744d696e7465725061757365723a206d7573742068617665206d696e74657220726f6c6520746f206d696e74436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656445524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20706175736545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c6645524332305061757361626c653a20746f6b656e207472616e73666572207768696c6520706175736564a26469706673582212206628cc9232cf1a5f43d289fbcc6f4b3c611f0a422a5d67b32c0623ef0c84093764736f6c63430006090033";
