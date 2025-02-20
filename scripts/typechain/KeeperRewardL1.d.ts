/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface KeeperRewardL1Interface extends ethers.utils.Interface {
  functions: {
    "candidate()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setKeeperFunctions(bytes4[],address[],uint256[])": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "tasksMap(bytes4)": FunctionFragment;
    "updateOwner()": FunctionFragment;
    "updatePriceFeed(bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "candidate", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setKeeperFunctions",
    values: [BytesLike[], string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "tasksMap", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updatePriceFeed",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "candidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setKeeperFunctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tasksMap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceFeed",
    data: BytesLike
  ): Result;

  events: {
    "KeeperCalled(address,bytes4,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "KeeperCalled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class KeeperRewardL1 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: KeeperRewardL1Interface;

  functions: {
    candidate(overrides?: CallOverrides): Promise<[string]>;

    "candidate()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _perpToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _perpToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    "rewardToken()"(overrides?: CallOverrides): Promise<[string]>;

    setKeeperFunctions(
      _funcSelectors: BytesLike[],
      _contracts: string[],
      _rewardAmount: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setKeeperFunctions(bytes4[],address[],uint256[])"(
      _funcSelectors: BytesLike[],
      _contracts: string[],
      _rewardAmount: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tasksMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, [BigNumber] & { d: BigNumber }] & {
        contractAddr: string;
        rewardAmount: [BigNumber] & { d: BigNumber };
      }
    >;

    "tasksMap(bytes4)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, [BigNumber] & { d: BigNumber }] & {
        contractAddr: string;
        rewardAmount: [BigNumber] & { d: BigNumber };
      }
    >;

    updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;

    updatePriceFeed(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updatePriceFeed(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  candidate(overrides?: CallOverrides): Promise<string>;

  "candidate()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _perpToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _perpToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  "rewardToken()"(overrides?: CallOverrides): Promise<string>;

  setKeeperFunctions(
    _funcSelectors: BytesLike[],
    _contracts: string[],
    _rewardAmount: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setKeeperFunctions(bytes4[],address[],uint256[])"(
    _funcSelectors: BytesLike[],
    _contracts: string[],
    _rewardAmount: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOwner(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tasksMap(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, [BigNumber] & { d: BigNumber }] & {
      contractAddr: string;
      rewardAmount: [BigNumber] & { d: BigNumber };
    }
  >;

  "tasksMap(bytes4)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, [BigNumber] & { d: BigNumber }] & {
      contractAddr: string;
      rewardAmount: [BigNumber] & { d: BigNumber };
    }
  >;

  updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

  "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;

  updatePriceFeed(
    _priceFeedKey: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updatePriceFeed(bytes32)"(
    _priceFeedKey: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    candidate(overrides?: CallOverrides): Promise<string>;

    "candidate()"(overrides?: CallOverrides): Promise<string>;

    initialize(_perpToken: string, overrides?: CallOverrides): Promise<void>;

    "initialize(address)"(
      _perpToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    "rewardToken()"(overrides?: CallOverrides): Promise<string>;

    setKeeperFunctions(
      _funcSelectors: BytesLike[],
      _contracts: string[],
      _rewardAmount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setKeeperFunctions(bytes4[],address[],uint256[])"(
      _funcSelectors: BytesLike[],
      _contracts: string[],
      _rewardAmount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tasksMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, [BigNumber] & { d: BigNumber }] & {
        contractAddr: string;
        rewardAmount: [BigNumber] & { d: BigNumber };
      }
    >;

    "tasksMap(bytes4)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, [BigNumber] & { d: BigNumber }] & {
        contractAddr: string;
        rewardAmount: [BigNumber] & { d: BigNumber };
      }
    >;

    updateOwner(overrides?: CallOverrides): Promise<void>;

    "updateOwner()"(overrides?: CallOverrides): Promise<void>;

    updatePriceFeed(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "updatePriceFeed(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    KeeperCalled(keeper: null, func: null, reward: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    candidate(overrides?: CallOverrides): Promise<BigNumber>;

    "candidate()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_perpToken: string, overrides?: Overrides): Promise<BigNumber>;

    "initialize(address)"(
      _perpToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    setKeeperFunctions(
      _funcSelectors: BytesLike[],
      _contracts: string[],
      _rewardAmount: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setKeeperFunctions(bytes4[],address[],uint256[])"(
      _funcSelectors: BytesLike[],
      _contracts: string[],
      _rewardAmount: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    setOwner(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tasksMap(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "tasksMap(bytes4)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateOwner(overrides?: Overrides): Promise<BigNumber>;

    "updateOwner()"(overrides?: Overrides): Promise<BigNumber>;

    updatePriceFeed(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updatePriceFeed(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    candidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "candidate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _perpToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _perpToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setKeeperFunctions(
      _funcSelectors: BytesLike[],
      _contracts: string[],
      _rewardAmount: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setKeeperFunctions(bytes4[],address[],uint256[])"(
      _funcSelectors: BytesLike[],
      _contracts: string[],
      _rewardAmount: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tasksMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tasksMap(bytes4)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateOwner(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    updatePriceFeed(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updatePriceFeed(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
