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

interface L2PriceFeedMockInterface extends ethers.utils.Interface {
  functions: {
    "getPrice(bytes32)": FunctionFragment;
    "getTwapPrice(bytes32,uint256)": FunctionFragment;
    "setLatestData(bytes32,uint256,uint256,uint256)": FunctionFragment;
    "setPrice(uint256)": FunctionFragment;
    "setTwapPrice(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getPrice", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getTwapPrice",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLatestData",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTwapPrice",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTwapPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLatestData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTwapPrice",
    data: BytesLike
  ): Result;

  events: {
    "PriceFeedDataSet(bytes32,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PriceFeedDataSet"): EventFragment;
}

export class L2PriceFeedMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: L2PriceFeedMockInterface;

  functions: {
    getPrice(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    "getPrice(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTwapPrice(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTwapPrice(bytes32,uint256)"(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

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

    setPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setTwapPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTwapPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getPrice(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "getPrice(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTwapPrice(
    arg0: BytesLike,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTwapPrice(bytes32,uint256)"(
    arg0: BytesLike,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

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

  setPrice(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPrice(uint256)"(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setTwapPrice(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTwapPrice(uint256)"(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getPrice(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getPrice(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTwapPrice(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTwapPrice(bytes32,uint256)"(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    setPrice(_price: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setPrice(uint256)"(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTwapPrice(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTwapPrice(uint256)"(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    PriceFeedDataSet(
      key: null,
      price: null,
      timestamp: null,
      roundId: null
    ): EventFilter;
  };

  estimateGas: {
    getPrice(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getPrice(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTwapPrice(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTwapPrice(bytes32,uint256)"(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    setPrice(_price: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setTwapPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setTwapPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPrice(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPrice(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTwapPrice(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTwapPrice(bytes32,uint256)"(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    setPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setTwapPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTwapPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
