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

interface MinterInterface extends ethers.utils.Interface {
  functions: {
    "candidate()": FunctionFragment;
    "getPerpToken()": FunctionFragment;
    "inflationMonitor()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "insuranceFund()": FunctionFragment;
    "mintForLoss(tuple)": FunctionFragment;
    "mintReward()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardsDistribution()": FunctionFragment;
    "setInflationMonitor(address)": FunctionFragment;
    "setInsuranceFund(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setRewardsDistribution(address)": FunctionFragment;
    "setSupplySchedule(address)": FunctionFragment;
    "supplySchedule()": FunctionFragment;
    "updateOwner()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "candidate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPerpToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inflationMonitor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "insuranceFund",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintForLoss",
    values: [{ d: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "mintReward",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setInflationMonitor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setInsuranceFund",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setRewardsDistribution",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSupplySchedule",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supplySchedule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "candidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPerpToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inflationMonitor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "insuranceFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintForLoss",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInflationMonitor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInsuranceFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSupplySchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supplySchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PerpMinted(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PerpMinted"): EventFragment;
}

export class Minter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MinterInterface;

  functions: {
    candidate(overrides?: CallOverrides): Promise<[string]>;

    "candidate()"(overrides?: CallOverrides): Promise<[string]>;

    getPerpToken(overrides?: CallOverrides): Promise<[string]>;

    "getPerpToken()"(overrides?: CallOverrides): Promise<[string]>;

    inflationMonitor(overrides?: CallOverrides): Promise<[string]>;

    "inflationMonitor()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _perpToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _perpToken: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    insuranceFund(overrides?: CallOverrides): Promise<[string]>;

    "insuranceFund()"(overrides?: CallOverrides): Promise<[string]>;

    mintForLoss(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mintForLoss(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mintReward(overrides?: Overrides): Promise<ContractTransaction>;

    "mintReward()"(overrides?: Overrides): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    rewardsDistribution(overrides?: CallOverrides): Promise<[string]>;

    "rewardsDistribution()"(overrides?: CallOverrides): Promise<[string]>;

    setInflationMonitor(
      _inflationMonitor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setInflationMonitor(address)"(
      _inflationMonitor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setInsuranceFund(
      _insuranceFund: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setInsuranceFund(address)"(
      _insuranceFund: string,
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

    setRewardsDistribution(
      _rewardsDistribution: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRewardsDistribution(address)"(
      _rewardsDistribution: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setSupplySchedule(
      _supplySchedule: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSupplySchedule(address)"(
      _supplySchedule: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supplySchedule(overrides?: CallOverrides): Promise<[string]>;

    "supplySchedule()"(overrides?: CallOverrides): Promise<[string]>;

    updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  candidate(overrides?: CallOverrides): Promise<string>;

  "candidate()"(overrides?: CallOverrides): Promise<string>;

  getPerpToken(overrides?: CallOverrides): Promise<string>;

  "getPerpToken()"(overrides?: CallOverrides): Promise<string>;

  inflationMonitor(overrides?: CallOverrides): Promise<string>;

  "inflationMonitor()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _perpToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _perpToken: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  insuranceFund(overrides?: CallOverrides): Promise<string>;

  "insuranceFund()"(overrides?: CallOverrides): Promise<string>;

  mintForLoss(
    _amount: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mintForLoss(tuple)"(
    _amount: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mintReward(overrides?: Overrides): Promise<ContractTransaction>;

  "mintReward()"(overrides?: Overrides): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  rewardsDistribution(overrides?: CallOverrides): Promise<string>;

  "rewardsDistribution()"(overrides?: CallOverrides): Promise<string>;

  setInflationMonitor(
    _inflationMonitor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setInflationMonitor(address)"(
    _inflationMonitor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setInsuranceFund(
    _insuranceFund: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setInsuranceFund(address)"(
    _insuranceFund: string,
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

  setRewardsDistribution(
    _rewardsDistribution: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRewardsDistribution(address)"(
    _rewardsDistribution: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setSupplySchedule(
    _supplySchedule: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setSupplySchedule(address)"(
    _supplySchedule: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supplySchedule(overrides?: CallOverrides): Promise<string>;

  "supplySchedule()"(overrides?: CallOverrides): Promise<string>;

  updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

  "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    candidate(overrides?: CallOverrides): Promise<string>;

    "candidate()"(overrides?: CallOverrides): Promise<string>;

    getPerpToken(overrides?: CallOverrides): Promise<string>;

    "getPerpToken()"(overrides?: CallOverrides): Promise<string>;

    inflationMonitor(overrides?: CallOverrides): Promise<string>;

    "inflationMonitor()"(overrides?: CallOverrides): Promise<string>;

    initialize(_perpToken: string, overrides?: CallOverrides): Promise<void>;

    "initialize(address)"(
      _perpToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    insuranceFund(overrides?: CallOverrides): Promise<string>;

    "insuranceFund()"(overrides?: CallOverrides): Promise<string>;

    mintForLoss(
      _amount: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "mintForLoss(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    mintReward(overrides?: CallOverrides): Promise<void>;

    "mintReward()"(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    rewardsDistribution(overrides?: CallOverrides): Promise<string>;

    "rewardsDistribution()"(overrides?: CallOverrides): Promise<string>;

    setInflationMonitor(
      _inflationMonitor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setInflationMonitor(address)"(
      _inflationMonitor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setInsuranceFund(
      _insuranceFund: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setInsuranceFund(address)"(
      _insuranceFund: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardsDistribution(
      _rewardsDistribution: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRewardsDistribution(address)"(
      _rewardsDistribution: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSupplySchedule(
      _supplySchedule: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSupplySchedule(address)"(
      _supplySchedule: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supplySchedule(overrides?: CallOverrides): Promise<string>;

    "supplySchedule()"(overrides?: CallOverrides): Promise<string>;

    updateOwner(overrides?: CallOverrides): Promise<void>;

    "updateOwner()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    PerpMinted(amount: null): EventFilter;
  };

  estimateGas: {
    candidate(overrides?: CallOverrides): Promise<BigNumber>;

    "candidate()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPerpToken(overrides?: CallOverrides): Promise<BigNumber>;

    "getPerpToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    inflationMonitor(overrides?: CallOverrides): Promise<BigNumber>;

    "inflationMonitor()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_perpToken: string, overrides?: Overrides): Promise<BigNumber>;

    "initialize(address)"(
      _perpToken: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    insuranceFund(overrides?: CallOverrides): Promise<BigNumber>;

    "insuranceFund()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintForLoss(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mintForLoss(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    mintReward(overrides?: Overrides): Promise<BigNumber>;

    "mintReward()"(overrides?: Overrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    rewardsDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardsDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    setInflationMonitor(
      _inflationMonitor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setInflationMonitor(address)"(
      _inflationMonitor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setInsuranceFund(
      _insuranceFund: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setInsuranceFund(address)"(
      _insuranceFund: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setOwner(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRewardsDistribution(
      _rewardsDistribution: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRewardsDistribution(address)"(
      _rewardsDistribution: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setSupplySchedule(
      _supplySchedule: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setSupplySchedule(address)"(
      _supplySchedule: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    supplySchedule(overrides?: CallOverrides): Promise<BigNumber>;

    "supplySchedule()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateOwner(overrides?: Overrides): Promise<BigNumber>;

    "updateOwner()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    candidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "candidate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPerpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPerpToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inflationMonitor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "inflationMonitor()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _perpToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _perpToken: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    insuranceFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "insuranceFund()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintForLoss(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mintForLoss(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mintReward(overrides?: Overrides): Promise<PopulatedTransaction>;

    "mintReward()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    rewardsDistribution(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardsDistribution()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setInflationMonitor(
      _inflationMonitor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setInflationMonitor(address)"(
      _inflationMonitor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setInsuranceFund(
      _insuranceFund: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setInsuranceFund(address)"(
      _insuranceFund: string,
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

    setRewardsDistribution(
      _rewardsDistribution: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRewardsDistribution(address)"(
      _rewardsDistribution: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setSupplySchedule(
      _supplySchedule: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSupplySchedule(address)"(
      _supplySchedule: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    supplySchedule(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "supplySchedule()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateOwner(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
