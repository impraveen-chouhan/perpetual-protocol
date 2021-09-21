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

interface CTokenInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "accrueInterest()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "balanceOfUnderlying(address)": FunctionFragment;
    "borrowBalanceCurrent(address)": FunctionFragment;
    "borrowBalanceStored(address)": FunctionFragment;
    "borrowRatePerBlock()": FunctionFragment;
    "exchangeRateCurrent()": FunctionFragment;
    "exchangeRateStored()": FunctionFragment;
    "getAccountSnapshot(address)": FunctionFragment;
    "getCash()": FunctionFragment;
    "seize(address,address,uint256)": FunctionFragment;
    "supplyRatePerBlock()": FunctionFragment;
    "totalBorrowsCurrent()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accrueInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOfUnderlying",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowBalanceCurrent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowBalanceStored",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowRatePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeRateCurrent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeRateStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountSnapshot",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getCash", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "seize",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supplyRatePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalBorrowsCurrent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accrueInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowBalanceCurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowBalanceStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRateCurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRateStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supplyRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBorrowsCurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {};
}

export class CTokenInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CTokenInterfaceInterface;

  functions: {
    accrueInterest(overrides?: Overrides): Promise<ContractTransaction>;

    "accrueInterest()"(overrides?: Overrides): Promise<ContractTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfUnderlying(
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "balanceOfUnderlying(address)"(
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    borrowBalanceCurrent(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "borrowBalanceCurrent(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "borrowBalanceStored(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    borrowRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "borrowRatePerBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    exchangeRateCurrent(overrides?: Overrides): Promise<ContractTransaction>;

    "exchangeRateCurrent()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    exchangeRateStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    "exchangeRateStored()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    "getAccountSnapshot(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    getCash(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getCash()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    seize(
      liquidator: string,
      borrower: string,
      seizeTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "seize(address,address,uint256)"(
      liquidator: string,
      borrower: string,
      seizeTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supplyRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "supplyRatePerBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalBorrowsCurrent(overrides?: Overrides): Promise<ContractTransaction>;

    "totalBorrowsCurrent()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transfer(
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  accrueInterest(overrides?: Overrides): Promise<ContractTransaction>;

  "accrueInterest()"(overrides?: Overrides): Promise<ContractTransaction>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfUnderlying(
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "balanceOfUnderlying(address)"(
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  borrowBalanceCurrent(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "borrowBalanceCurrent(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  borrowBalanceStored(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "borrowBalanceStored(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "borrowRatePerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  exchangeRateCurrent(overrides?: Overrides): Promise<ContractTransaction>;

  "exchangeRateCurrent()"(overrides?: Overrides): Promise<ContractTransaction>;

  exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;

  "exchangeRateStored()"(overrides?: CallOverrides): Promise<BigNumber>;

  getAccountSnapshot(
    account: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  "getAccountSnapshot(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  getCash(overrides?: CallOverrides): Promise<BigNumber>;

  "getCash()"(overrides?: CallOverrides): Promise<BigNumber>;

  seize(
    liquidator: string,
    borrower: string,
    seizeTokens: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "seize(address,address,uint256)"(
    liquidator: string,
    borrower: string,
    seizeTokens: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "supplyRatePerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalBorrowsCurrent(overrides?: Overrides): Promise<ContractTransaction>;

  "totalBorrowsCurrent()"(overrides?: Overrides): Promise<ContractTransaction>;

  transfer(
    dst: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    dst: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    src: string,
    dst: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    src: string,
    dst: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    accrueInterest(overrides?: CallOverrides): Promise<BigNumber>;

    "accrueInterest()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfUnderlying(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfUnderlying(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowBalanceCurrent(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalanceCurrent(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalanceStored(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "borrowRatePerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;

    "exchangeRateCurrent()"(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;

    "exchangeRateStored()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    "getAccountSnapshot(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    getCash(overrides?: CallOverrides): Promise<BigNumber>;

    "getCash()"(overrides?: CallOverrides): Promise<BigNumber>;

    seize(
      liquidator: string,
      borrower: string,
      seizeTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "seize(address,address,uint256)"(
      liquidator: string,
      borrower: string,
      seizeTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "supplyRatePerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;

    "totalBorrowsCurrent()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      dst: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      dst: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    accrueInterest(overrides?: Overrides): Promise<BigNumber>;

    "accrueInterest()"(overrides?: Overrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfUnderlying(
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "balanceOfUnderlying(address)"(
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    borrowBalanceCurrent(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "borrowBalanceCurrent(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalanceStored(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "borrowRatePerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeRateCurrent(overrides?: Overrides): Promise<BigNumber>;

    "exchangeRateCurrent()"(overrides?: Overrides): Promise<BigNumber>;

    exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;

    "exchangeRateStored()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAccountSnapshot(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCash(overrides?: CallOverrides): Promise<BigNumber>;

    "getCash()"(overrides?: CallOverrides): Promise<BigNumber>;

    seize(
      liquidator: string,
      borrower: string,
      seizeTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "seize(address,address,uint256)"(
      liquidator: string,
      borrower: string,
      seizeTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "supplyRatePerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalBorrowsCurrent(overrides?: Overrides): Promise<BigNumber>;

    "totalBorrowsCurrent()"(overrides?: Overrides): Promise<BigNumber>;

    transfer(
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accrueInterest(overrides?: Overrides): Promise<PopulatedTransaction>;

    "accrueInterest()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfUnderlying(
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "balanceOfUnderlying(address)"(
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    borrowBalanceCurrent(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "borrowBalanceCurrent(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "borrowBalanceStored(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowRatePerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "borrowRatePerBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchangeRateCurrent(overrides?: Overrides): Promise<PopulatedTransaction>;

    "exchangeRateCurrent()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    exchangeRateStored(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exchangeRateStored()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAccountSnapshot(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCash()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seize(
      liquidator: string,
      borrower: string,
      seizeTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "seize(address,address,uint256)"(
      liquidator: string,
      borrower: string,
      seizeTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    supplyRatePerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supplyRatePerBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBorrowsCurrent(overrides?: Overrides): Promise<PopulatedTransaction>;

    "totalBorrowsCurrent()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transfer(
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
