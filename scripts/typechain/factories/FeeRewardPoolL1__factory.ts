/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FeeRewardPoolL1 } from "../FeeRewardPoolL1";

export class FeeRewardPoolL1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<FeeRewardPoolL1> {
    return super.deploy(overrides || {}) as Promise<FeeRewardPoolL1>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FeeRewardPoolL1 {
    return super.attach(address) as FeeRewardPoolL1;
  }
  connect(signer: Signer): FeeRewardPoolL1__factory {
    return super.connect(signer) as FeeRewardPoolL1__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeRewardPoolL1 {
    return new Contract(address, _abi, signerOrProvider) as FeeRewardPoolL1;
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardWithdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "DURATION",
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
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "earned",
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
    inputs: [],
    name: "feeTokenPoolDispatcher",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract StakedPerpToken",
        name: "_stakedPerpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeTokenPoolDispatcher",
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
    name: "lastTimeRewardApplicable",
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
    inputs: [],
    name: "lastUpdateTime",
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
        components: [
          {
            internalType: "uint256",
            name: "d",
            type: "uint256",
          },
        ],
        internalType: "struct Decimal.decimal",
        name: "_reward",
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
        name: "_staker",
        type: "address",
      },
    ],
    name: "notifyStakeChanged",
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
    name: "periodFinish",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
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
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "d",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "d",
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
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "d",
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
    name: "stakedPerpToken",
    outputs: [
      {
        internalType: "contract StakedPerpToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "d",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611b2c806100206000396000f3fe608060405234801561001057600080fd5b50600436106101415760003560e01c8063bc5920ba116100b8578063cd8ae3dd1161007c578063cd8ae3dd1461022f578063df136d6514610242578063ebe2b12b1461024a578063f6aa49e714610252578063fc0c546a1461025a578063ff59f86d1461026257610141565b8063bc5920ba146101fc578063c0c53b8b14610204578063c885bc5814610217578063c8f33c911461021f578063cd3daf9d1461022757610141565b80636c8381f81161010a5780636c8381f8146101c1578063715018a6146101c95780637b0a47ee146101d157806380faa57d146101d95780638b876347146101e15780638da5cb5b146101f457610141565b80628cc262146101465780630700037d1461016f57806313af40351461018f5780631be05289146101a45780634cd7ee95146101ac575b600080fd5b61015961015436600461152f565b610275565b6040516101669190611aa2565b60405180910390f35b61018261017d36600461152f565b610302565b6040516101669190611aac565b6101a261019d36600461152f565b610314565b005b6101826103f6565b6101b46103fd565b604051610166919061163d565b6101b461040d565b6101a261041d565b61018261049c565b6101826104a3565b6101826101ef36600461152f565b6104be565b6101b46104d0565b6101a26104df565b6101a261021236600461156b565b6105a2565b6101a2610696565b610182610784565b61015961078b565b6101a261023d36600461152f565b610845565b61018261088c565b610182610893565b6101b461089a565b6101b46108aa565b6101a26102703660046115b5565b6108ba565b61027d61151c565b6001600160a01b038216600081815260ff60209081526040808320815180840183529054815293835260fe8252918290208251918201909252905481526102fc91906102f0906102db906102cf61078b565b9063ffffffff610a4616565b6102e486610a72565b9063ffffffff610b0b16565b9063ffffffff610b2e16565b92915050565b60ff6020526000908152604090205481565b61031c610b51565b6065546001600160a01b039081169116146103525760405162461bcd60e51b815260040161034990611a0f565b60405180910390fd5b6001600160a01b0381166103785760405162461bcd60e51b8152600401610349906118a0565b6065546001600160a01b03828116911614156103a65760405162461bcd60e51b815260040161034990611a5c565b6066546001600160a01b03828116911614156103d45760405162461bcd60e51b81526004016103499061170b565b606680546001600160a01b0319166001600160a01b0392909216919091179055565b6201518081565b610105546001600160a01b031681565b6066546001600160a01b03165b90565b610425610b51565b6065546001600160a01b039081169116146104525760405162461bcd60e51b815260040161034990611a0f565b6065546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3606580546001600160a01b0319169055565b6101015481565b60006104b96104b0610b55565b61010354610b59565b905090565b60fe6020526000908152604090205481565b6065546001600160a01b031690565b6066546001600160a01b03166105075760405162461bcd60e51b8152600401610349906119c0565b61050f610b51565b6066546001600160a01b0390811691161461053c5760405162461bcd60e51b8152600401610349906117a0565b6066546065546040516001600160a01b0392831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360668054606580546001600160a01b03199081166001600160a01b03841617909155169055565b600054610100900460ff16806105bb57506105bb610b71565b806105c9575060005460ff16155b6105e55760405162461bcd60e51b8152600401610349906118e2565b600054610100900460ff16158015610610576000805460ff1961ff0019909116610100171660011790555b6001600160a01b0383166106365760405162461bcd60e51b815260040161034990611930565b61063e610b77565b61010580546001600160a01b038086166001600160a01b03199283161790925561010480548584169083161790556101068054928716929091169190911790558015610690576000805461ff00191690555b50505050565b60006106a0610b51565b90506106ab81610c09565b6106b361151c565b506001600160a01b038116600090815260ff602090815260408083208151928301909152548152906106e482610c68565b116107015760405162461bcd60e51b815260040161034990611752565b610709610c6c565b6001600160a01b03808416600090815260ff6020526040902091519091556101065461073791168383610c87565b816001600160a01b03167f1d3eee4ca001cff39eec6ec7615aacf2f2bd61791273830728ba00ccbd6e133761076b83610c68565b6040516107789190611aac565b60405180910390a25050565b6101025481565b61079361151c565b61079b61151c565b6107a3610db6565b90506107ae81610c68565b6107ca575050604080516020810190915261010054815261041a565b60006107e7610102546107db6104a3565b9063ffffffff610e5716565b604080516020810190915261010154815290915061083e90610821908390610815908663ffffffff610e9916565b9063ffffffff610ebc16565b60408051602081019091526101005481529063ffffffff610b2e16565b9250505090565b610105546001600160a01b031661085a610b51565b6001600160a01b0316146108805760405162461bcd60e51b815260040161034990611777565b61088981610c09565b50565b6101005481565b6101035481565b610104546001600160a01b031681565b610106546001600160a01b031681565b610104546001600160a01b03166108cf610b51565b6001600160a01b0316146108f55760405162461bcd60e51b815260040161034990611828565b600061090e610909368490038401846115cc565b610c68565b1161092b5760405162461bcd60e51b815260040161034990611957565b6109356000610c09565b600061093f610b55565b90506101035481106109775761096d62015180610961368590038501856115cc565b9063ffffffff610ede16565b51610101556109dd565b6101035460009061098e908363ffffffff610e5716565b905061099861151c565b60408051602081019091526101015481526109b9908363ffffffff610ebc16565b90506109d562015180610961836102f0368990038901896115cc565b516101015550505b6101028190556109f6816201518063ffffffff610f0016565b610103557fe7b1adc654f4988d82260a00603bcc1f508dc3aa94b2b9cd5bc9ab42cfc591dc610a2d610909368590038501856115cc565b604051610a3a9190611aac565b60405180910390a15050565b610a4e61151c565b610a5661151c565b82518451610a699163ffffffff610e5716565b81529392505050565b610a7a61151c565b604080516020810191829052610105546370a0823160e01b9092529081906001600160a01b03166370a08231610ab3866024850161163d565b60206040518083038186803b158015610acb57600080fd5b505afa158015610adf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b039190611609565b905292915050565b610b1361151c565b610b1b61151c565b82518451610a699163ffffffff610f2516565b610b3661151c565b610b3e61151c565b82518451610a699163ffffffff610f0016565b3390565b4290565b6000818310610b685781610b6a565b825b9392505050565b303b1590565b600054610100900460ff1680610b905750610b90610b71565b80610b9e575060005460ff16155b610bba5760405162461bcd60e51b8152600401610349906118e2565b600054610100900460ff16158015610be5576000805460ff1961ff0019909116610100171660011790555b610bed610f33565b610bf5610fb4565b8015610889576000805461ff001916905550565b610c1161078b565b5161010055610c1e6104a3565b610102556001600160a01b0381161561088957610c3a81610275565b6001600160a01b038216600090815260ff60209081526040808320935190935560fe90522061010054905550565b5190565b610c7461151c565b5060408051602081019091526000815290565b610c908361108e565b610c9861151c565b610ca284846110db565b90506000610cb08584611168565b905060006060866001600160a01b031663a9059cbb60e01b8785604051602401610cdb929190611651565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610d199190611621565b6000604051808303816000865af19150503d8060008114610d56576040519150601f19603f3d011682016040523d82523d6000602084013e610d5b565b606091505b5091509150818015610d85575080511580610d85575080806020019051810190610d85919061154b565b610da15760405162461bcd60e51b81526004016103499061169d565b610dad878785876111e6565b50505050505050565b610dbe61151c565b604051806020016040528061010560009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e1857600080fd5b505afa158015610e2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e509190611609565b9052905090565b6000610b6a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611239565b610ea161151c565b610ea961151c565b82518451610a699163ffffffff61126516565b610ec461151c565b610ecc61151c565b8351610a69908463ffffffff61127316565b610ee661151c565b610eee61151c565b8351610a69908463ffffffff6112ad16565b600082820183811015610b6a5760405162461bcd60e51b8152600401610349906116d4565b6000610b6a838360126112ef565b600054610100900460ff1680610f4c5750610f4c610b71565b80610f5a575060005460ff16155b610f765760405162461bcd60e51b8152600401610349906118e2565b600054610100900460ff16158015610bf5576000805460ff1961ff0019909116610100171660011790558015610889576000805461ff001916905550565b600054610100900460ff1680610fcd5750610fcd610b71565b80610fdb575060005460ff16155b610ff75760405162461bcd60e51b8152600401610349906118e2565b600054610100900460ff16158015611022576000805460ff1961ff0019909116610100171660011790555b600061102c610b51565b606580546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610889576000805461ff001916905550565b60006110998261130d565b6001600160a01b038316600090815260cb602052604090205490915081146110d7576001600160a01b038216600090815260cb602052604090208190555b5050565b6110e361151c565b610b6a83846001600160a01b03166370a08231856040518263ffffffff1660e01b8152600401611113919061163d565b60206040518083038186803b15801561112b57600080fd5b505afa15801561113f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111639190611609565b6113fa565b6000806111748461130d565b9050601281106111b2576111aa61119282601263ffffffff610e5716565b600a0a61119e85610c68565b9063ffffffff61127316565b9150506102fc565b6111de6111c660128363ffffffff610e5716565b600a0a6111d285610c68565b9063ffffffff6112ad16565b949350505050565b6112196112036111f686856113fa565b839063ffffffff610b2e16565b61120d86866110db565b9063ffffffff61148c16565b60000b156106905760405162461bcd60e51b81526004016103499061197e565b6000818484111561125d5760405162461bcd60e51b8152600401610349919061166a565b505050900390565b6000610b6a838360126114bd565b600082611282575060006102fc565b8282028284828161128f57fe5b0414610b6a5760405162461bcd60e51b81526004016103499061185f565b6000610b6a83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506114dc565b60006111de6112fd83611513565b6111d2868663ffffffff61127316565b6001600160a01b038116600090815260cb6020526040812054806102fc5760408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290516000916060916001600160a01b0387169161136f91611621565b600060405180830381855afa9150503d80600081146113aa576040519150601f19603f3d011682016040523d82523d6000602084013e6113af565b606091505b50915091508180156113c15750805115155b6113dd5760405162461bcd60e51b8152600401610349906117e7565b808060200190518101906113f19190611609565b95945050505050565b61140261151c565b600061140d8461130d565b9050601281106114525760408051602081019091528061144761143784601263ffffffff610e5716565b8690600a0a63ffffffff6112ad16565b8152509150506102fc565b60408051602081019091528061148261147260128563ffffffff610e5716565b8690600a0a63ffffffff61127316565b9052949350505050565b8051825160009110156114a1575060016102fc565b8151835110156114b457506000196102fc565b50600092915050565b60006111de836111d26114cf85611513565b879063ffffffff61127316565b600081836114fd5760405162461bcd60e51b8152600401610349919061166a565b50600083858161150957fe5b0495945050505050565b60ff16600a0a90565b6040518060200160405280600081525090565b600060208284031215611540578081fd5b8135610b6a81611ae1565b60006020828403121561155c578081fd5b81518015158114610b6a578182fd5b60008060006060848603121561157f578182fd5b833561158a81611ae1565b9250602084013561159a81611ae1565b915060408401356115aa81611ae1565b809150509250925092565b6000602082840312156115c6578081fd5b50919050565b6000602082840312156115dd578081fd5b6040516020810181811067ffffffffffffffff821117156115fc578283fd5b6040529135825250919050565b60006020828403121561161a578081fd5b5051919050565b60008251611633818460208701611ab5565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6000602082528251806020840152611689816040850160208701611ab5565b601f01601f19169190910160400192915050565b6020808252601d908201527f446563696d616c45524332303a207472616e73666572206661696c6564000000604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526027908201527f5065727046694f776e61626c65557067726164653a2073616d652061732063616040820152666e64696461746560c81b606082015260800190565b6020808252600b908201526a072657761726420697320360ac1b604082015260600190565b6020808252600f908201526e37b7363c9039a832b9382a37b5b2b760891b604082015260600190565b60208082526027908201527f5065727046694f776e61626c65557067726164653a206e6f7420746865206e656040820152663b9037bbb732b960c91b606082015260800190565b60208082526021908201527f446563696d616c45524332303a2067657420646563696d616c73206661696c656040820152601960fa1b606082015260800190565b6020808252601b908201527f6f6e6c7920666565546f6b656e506f6f6c446973706174636865720000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b60208082526022908201527f5065727046694f776e61626c65557067726164653a207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252600d908201526c125b9d985b1a59081a5b9c1d5d609a1b604082015260600190565b6020808252600d908201526c1a5b9d985b1a59081a5b9c1d5d609a1b604082015260600190565b60208082526022908201527f446563696d616c45524332303a2062616c616e636520696e636f6e73697374656040820152611b9d60f21b606082015260800190565b6020808252602f908201527f5065727046694f776e61626c65557067726164653a2063616e6469646174652060408201526e6973207a65726f206164647265737360881b606082015260800190565b6020808252602d908201527f5065727046694f776e61626c65557067726164653a2063616c6c65722069732060408201526c3737ba103a34329037bbb732b960991b606082015260800190565b60208082526026908201527f5065727046694f776e61626c65557067726164653a2073616d65206173206f726040820152651a59da5b985b60d21b606082015260800190565b9051815260200190565b90815260200190565b60005b83811015611ad0578181015183820152602001611ab8565b838111156106905750506000910152565b6001600160a01b038116811461088957600080fdfea264697066735822122086d88a99dcf88cab951b6b1560893761f0ece2832eeee5990963c103feddf0f164736f6c63430006090033";
