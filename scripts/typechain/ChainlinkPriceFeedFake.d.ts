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

interface ChainlinkPriceFeedFakeInterface extends ethers.utils.Interface {
  functions: {
    "addAggregator(bytes32,address)": FunctionFragment;
    "candidate()": FunctionFragment;
    "getAggregator(bytes32)": FunctionFragment;
    "getLatestTimestamp(bytes32)": FunctionFragment;
    "getPreviousPrice(bytes32,uint256)": FunctionFragment;
    "getPreviousTimestamp(bytes32,uint256)": FunctionFragment;
    "getPrice(bytes32)": FunctionFragment;
    "getTwapPrice(bytes32,uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "mock_getCurrentBlockNumber()": FunctionFragment;
    "mock_getCurrentTimestamp()": FunctionFragment;
    "mock_setBlockNumber(uint256)": FunctionFragment;
    "mock_setBlockTimestamp(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "priceFeedDecimalMap(bytes32)": FunctionFragment;
    "priceFeedKeys(uint256)": FunctionFragment;
    "priceFeedMap(bytes32)": FunctionFragment;
    "removeAggregator(bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setLatestData(bytes32,uint256,uint256,uint256)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "updateOwner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAggregator",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "candidate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAggregator",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestTimestamp",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPreviousPrice",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPreviousTimestamp",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getTwapPrice",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mock_getCurrentBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mock_getCurrentTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mock_setBlockNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mock_setBlockTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceFeedDecimalMap",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeedKeys",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeedMap",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAggregator",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLatestData",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "candidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPreviousPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPreviousTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTwapPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mock_getCurrentBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mock_getCurrentTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mock_setBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mock_setBlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceFeedDecimalMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceFeedKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceFeedMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLatestData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ChainlinkPriceFeedFake extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ChainlinkPriceFeedFakeInterface;

  functions: {
    addAggregator(
      _priceFeedKey: BytesLike,
      _aggregator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addAggregator(bytes32,address)"(
      _priceFeedKey: BytesLike,
      _aggregator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    candidate(overrides?: CallOverrides): Promise<[string]>;

    "candidate()"(overrides?: CallOverrides): Promise<[string]>;

    getAggregator(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getAggregator(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getLatestTimestamp(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getLatestTimestamp(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPreviousPrice(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPreviousPrice(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPreviousTimestamp(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPreviousTimestamp(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPrice(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPrice(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTwapPrice(
      _priceFeedKey: BytesLike,
      _interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTwapPrice(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(overrides?: Overrides): Promise<ContractTransaction>;

    "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

    mock_getCurrentBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    "mock_getCurrentBlockNumber()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mock_getCurrentTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "mock_getCurrentTimestamp()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mock_setBlockNumber(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mock_setBlockNumber(uint256)"(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mock_setBlockTimestamp(
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mock_setBlockTimestamp(uint256)"(
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    priceFeedDecimalMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "priceFeedDecimalMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    priceFeedKeys(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "priceFeedKeys(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    priceFeedMap(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "priceFeedMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    removeAggregator(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeAggregator(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setLatestData(
      _priceFeedKey: BytesLike,
      _price: BigNumberish,
      _timestamp: BigNumberish,
      _roundId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLatestData(bytes32,uint256,uint256,uint256)"(
      _priceFeedKey: BytesLike,
      _price: BigNumberish,
      _timestamp: BigNumberish,
      _roundId: BigNumberish,
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

    updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  addAggregator(
    _priceFeedKey: BytesLike,
    _aggregator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addAggregator(bytes32,address)"(
    _priceFeedKey: BytesLike,
    _aggregator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  candidate(overrides?: CallOverrides): Promise<string>;

  "candidate()"(overrides?: CallOverrides): Promise<string>;

  getAggregator(
    _priceFeedKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "getAggregator(bytes32)"(
    _priceFeedKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getLatestTimestamp(
    _priceFeedKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getLatestTimestamp(bytes32)"(
    _priceFeedKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPreviousPrice(
    _priceFeedKey: BytesLike,
    _numOfRoundBack: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPreviousPrice(bytes32,uint256)"(
    _priceFeedKey: BytesLike,
    _numOfRoundBack: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPreviousTimestamp(
    _priceFeedKey: BytesLike,
    _numOfRoundBack: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPreviousTimestamp(bytes32,uint256)"(
    _priceFeedKey: BytesLike,
    _numOfRoundBack: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPrice(
    _priceFeedKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPrice(bytes32)"(
    _priceFeedKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTwapPrice(
    _priceFeedKey: BytesLike,
    _interval: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTwapPrice(bytes32,uint256)"(
    _priceFeedKey: BytesLike,
    _interval: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(overrides?: Overrides): Promise<ContractTransaction>;

  "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

  mock_getCurrentBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  "mock_getCurrentBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

  mock_getCurrentTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "mock_getCurrentTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  mock_setBlockNumber(
    _number: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mock_setBlockNumber(uint256)"(
    _number: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mock_setBlockTimestamp(
    _timestamp: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mock_setBlockTimestamp(uint256)"(
    _timestamp: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  priceFeedDecimalMap(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  "priceFeedDecimalMap(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  priceFeedKeys(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "priceFeedKeys(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  priceFeedMap(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "priceFeedMap(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  removeAggregator(
    _priceFeedKey: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeAggregator(bytes32)"(
    _priceFeedKey: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setLatestData(
    _priceFeedKey: BytesLike,
    _price: BigNumberish,
    _timestamp: BigNumberish,
    _roundId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLatestData(bytes32,uint256,uint256,uint256)"(
    _priceFeedKey: BytesLike,
    _price: BigNumberish,
    _timestamp: BigNumberish,
    _roundId: BigNumberish,
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

  updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

  "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    addAggregator(
      _priceFeedKey: BytesLike,
      _aggregator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addAggregator(bytes32,address)"(
      _priceFeedKey: BytesLike,
      _aggregator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    candidate(overrides?: CallOverrides): Promise<string>;

    "candidate()"(overrides?: CallOverrides): Promise<string>;

    getAggregator(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getAggregator(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getLatestTimestamp(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getLatestTimestamp(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPreviousPrice(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPreviousPrice(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPreviousTimestamp(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPreviousTimestamp(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPrice(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTwapPrice(
      _priceFeedKey: BytesLike,
      _interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTwapPrice(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: CallOverrides): Promise<void>;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    mock_getCurrentBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "mock_getCurrentBlockNumber()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mock_getCurrentTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "mock_getCurrentTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    mock_setBlockNumber(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mock_setBlockNumber(uint256)"(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mock_setBlockTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mock_setBlockTimestamp(uint256)"(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    priceFeedDecimalMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    "priceFeedDecimalMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    priceFeedKeys(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "priceFeedKeys(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    priceFeedMap(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "priceFeedMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    removeAggregator(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeAggregator(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setLatestData(
      _priceFeedKey: BytesLike,
      _price: BigNumberish,
      _timestamp: BigNumberish,
      _roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLatestData(bytes32,uint256,uint256,uint256)"(
      _priceFeedKey: BytesLike,
      _price: BigNumberish,
      _timestamp: BigNumberish,
      _roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOwner(overrides?: CallOverrides): Promise<void>;

    "updateOwner()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    addAggregator(
      _priceFeedKey: BytesLike,
      _aggregator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addAggregator(bytes32,address)"(
      _priceFeedKey: BytesLike,
      _aggregator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    candidate(overrides?: CallOverrides): Promise<BigNumber>;

    "candidate()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAggregator(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAggregator(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLatestTimestamp(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getLatestTimestamp(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPreviousPrice(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPreviousPrice(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPreviousTimestamp(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPreviousTimestamp(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPrice(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTwapPrice(
      _priceFeedKey: BytesLike,
      _interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTwapPrice(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: Overrides): Promise<BigNumber>;

    "initialize()"(overrides?: Overrides): Promise<BigNumber>;

    mock_getCurrentBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "mock_getCurrentBlockNumber()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mock_getCurrentTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "mock_getCurrentTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    mock_setBlockNumber(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mock_setBlockNumber(uint256)"(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mock_setBlockTimestamp(
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mock_setBlockTimestamp(uint256)"(
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeedDecimalMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "priceFeedDecimalMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceFeedKeys(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "priceFeedKeys(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceFeedMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "priceFeedMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeAggregator(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeAggregator(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setLatestData(
      _priceFeedKey: BytesLike,
      _price: BigNumberish,
      _timestamp: BigNumberish,
      _roundId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setLatestData(bytes32,uint256,uint256,uint256)"(
      _priceFeedKey: BytesLike,
      _price: BigNumberish,
      _timestamp: BigNumberish,
      _roundId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setOwner(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateOwner(overrides?: Overrides): Promise<BigNumber>;

    "updateOwner()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addAggregator(
      _priceFeedKey: BytesLike,
      _aggregator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addAggregator(bytes32,address)"(
      _priceFeedKey: BytesLike,
      _aggregator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    candidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "candidate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAggregator(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAggregator(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatestTimestamp(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLatestTimestamp(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPreviousPrice(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPreviousPrice(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPreviousTimestamp(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPreviousTimestamp(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _numOfRoundBack: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPrice(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTwapPrice(
      _priceFeedKey: BytesLike,
      _interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTwapPrice(bytes32,uint256)"(
      _priceFeedKey: BytesLike,
      _interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(overrides?: Overrides): Promise<PopulatedTransaction>;

    "initialize()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    mock_getCurrentBlockNumber(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "mock_getCurrentBlockNumber()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mock_getCurrentTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "mock_getCurrentTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mock_setBlockNumber(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mock_setBlockNumber(uint256)"(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mock_setBlockTimestamp(
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mock_setBlockTimestamp(uint256)"(
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeedDecimalMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "priceFeedDecimalMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceFeedKeys(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "priceFeedKeys(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceFeedMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "priceFeedMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeAggregator(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeAggregator(bytes32)"(
      _priceFeedKey: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setLatestData(
      _priceFeedKey: BytesLike,
      _price: BigNumberish,
      _timestamp: BigNumberish,
      _roundId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLatestData(bytes32,uint256,uint256,uint256)"(
      _priceFeedKey: BytesLike,
      _price: BigNumberish,
      _timestamp: BigNumberish,
      _roundId: BigNumberish,
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

    updateOwner(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
