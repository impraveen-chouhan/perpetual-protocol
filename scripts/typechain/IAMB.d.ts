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

interface IAMBInterface extends ethers.utils.Interface {
  functions: {
    "destinationChainId()": FunctionFragment;
    "failedMessageDataHash(bytes32)": FunctionFragment;
    "failedMessageReceiver(bytes32)": FunctionFragment;
    "failedMessageSender(bytes32)": FunctionFragment;
    "maxGasPerTx()": FunctionFragment;
    "messageCallStatus(bytes32)": FunctionFragment;
    "messageId()": FunctionFragment;
    "messageSender()": FunctionFragment;
    "messageSourceChainId()": FunctionFragment;
    "requireToPassMessage(address,bytes,uint256)": FunctionFragment;
    "sourceChainId()": FunctionFragment;
    "transactionHash()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "destinationChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageDataHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageReceiver",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageSender",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxGasPerTx",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messageCallStatus",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "messageId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "messageSender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messageSourceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requireToPassMessage",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sourceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transactionHash",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "destinationChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessageDataHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessageReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessageSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxGasPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageCallStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messageId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "messageSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageSourceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireToPassMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sourceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactionHash",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAMB extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IAMBInterface;

  functions: {
    destinationChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "destinationChainId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    failedMessageDataHash(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "failedMessageDataHash(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    failedMessageReceiver(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "failedMessageReceiver(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    failedMessageSender(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "failedMessageSender(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    maxGasPerTx(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxGasPerTx()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    messageCallStatus(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "messageCallStatus(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    messageId(overrides?: CallOverrides): Promise<[string]>;

    "messageId()"(overrides?: CallOverrides): Promise<[string]>;

    messageSender(overrides?: CallOverrides): Promise<[string]>;

    "messageSender()"(overrides?: CallOverrides): Promise<[string]>;

    messageSourceChainId(overrides?: CallOverrides): Promise<[string]>;

    "messageSourceChainId()"(overrides?: CallOverrides): Promise<[string]>;

    requireToPassMessage(
      _contract: string,
      _data: BytesLike,
      _gas: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "requireToPassMessage(address,bytes,uint256)"(
      _contract: string,
      _data: BytesLike,
      _gas: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sourceChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "sourceChainId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transactionHash(overrides?: CallOverrides): Promise<[string]>;

    "transactionHash()"(overrides?: CallOverrides): Promise<[string]>;
  };

  destinationChainId(overrides?: CallOverrides): Promise<BigNumber>;

  "destinationChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

  failedMessageDataHash(
    _messageId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "failedMessageDataHash(bytes32)"(
    _messageId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  failedMessageReceiver(
    _messageId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "failedMessageReceiver(bytes32)"(
    _messageId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  failedMessageSender(
    _messageId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "failedMessageSender(bytes32)"(
    _messageId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  maxGasPerTx(overrides?: CallOverrides): Promise<BigNumber>;

  "maxGasPerTx()"(overrides?: CallOverrides): Promise<BigNumber>;

  messageCallStatus(
    _messageId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "messageCallStatus(bytes32)"(
    _messageId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  messageId(overrides?: CallOverrides): Promise<string>;

  "messageId()"(overrides?: CallOverrides): Promise<string>;

  messageSender(overrides?: CallOverrides): Promise<string>;

  "messageSender()"(overrides?: CallOverrides): Promise<string>;

  messageSourceChainId(overrides?: CallOverrides): Promise<string>;

  "messageSourceChainId()"(overrides?: CallOverrides): Promise<string>;

  requireToPassMessage(
    _contract: string,
    _data: BytesLike,
    _gas: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "requireToPassMessage(address,bytes,uint256)"(
    _contract: string,
    _data: BytesLike,
    _gas: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sourceChainId(overrides?: CallOverrides): Promise<BigNumber>;

  "sourceChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

  transactionHash(overrides?: CallOverrides): Promise<string>;

  "transactionHash()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    destinationChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "destinationChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    failedMessageDataHash(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "failedMessageDataHash(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    failedMessageReceiver(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "failedMessageReceiver(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    failedMessageSender(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "failedMessageSender(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    maxGasPerTx(overrides?: CallOverrides): Promise<BigNumber>;

    "maxGasPerTx()"(overrides?: CallOverrides): Promise<BigNumber>;

    messageCallStatus(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "messageCallStatus(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    messageId(overrides?: CallOverrides): Promise<string>;

    "messageId()"(overrides?: CallOverrides): Promise<string>;

    messageSender(overrides?: CallOverrides): Promise<string>;

    "messageSender()"(overrides?: CallOverrides): Promise<string>;

    messageSourceChainId(overrides?: CallOverrides): Promise<string>;

    "messageSourceChainId()"(overrides?: CallOverrides): Promise<string>;

    requireToPassMessage(
      _contract: string,
      _data: BytesLike,
      _gas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "requireToPassMessage(address,bytes,uint256)"(
      _contract: string,
      _data: BytesLike,
      _gas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    sourceChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "sourceChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    transactionHash(overrides?: CallOverrides): Promise<string>;

    "transactionHash()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    destinationChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "destinationChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    failedMessageDataHash(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "failedMessageDataHash(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    failedMessageReceiver(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "failedMessageReceiver(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    failedMessageSender(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "failedMessageSender(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxGasPerTx(overrides?: CallOverrides): Promise<BigNumber>;

    "maxGasPerTx()"(overrides?: CallOverrides): Promise<BigNumber>;

    messageCallStatus(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "messageCallStatus(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    messageId(overrides?: CallOverrides): Promise<BigNumber>;

    "messageId()"(overrides?: CallOverrides): Promise<BigNumber>;

    messageSender(overrides?: CallOverrides): Promise<BigNumber>;

    "messageSender()"(overrides?: CallOverrides): Promise<BigNumber>;

    messageSourceChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "messageSourceChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    requireToPassMessage(
      _contract: string,
      _data: BytesLike,
      _gas: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "requireToPassMessage(address,bytes,uint256)"(
      _contract: string,
      _data: BytesLike,
      _gas: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sourceChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "sourceChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    transactionHash(overrides?: CallOverrides): Promise<BigNumber>;

    "transactionHash()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    destinationChainId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "destinationChainId()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    failedMessageDataHash(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "failedMessageDataHash(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    failedMessageReceiver(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "failedMessageReceiver(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    failedMessageSender(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "failedMessageSender(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxGasPerTx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxGasPerTx()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messageCallStatus(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "messageCallStatus(bytes32)"(
      _messageId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    messageId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "messageId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messageSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "messageSender()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messageSourceChainId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "messageSourceChainId()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requireToPassMessage(
      _contract: string,
      _data: BytesLike,
      _gas: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "requireToPassMessage(address,bytes,uint256)"(
      _contract: string,
      _data: BytesLike,
      _gas: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sourceChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "sourceChainId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transactionHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "transactionHash()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
