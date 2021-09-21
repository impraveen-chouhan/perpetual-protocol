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

interface RewardsDistributionRecipientInterface extends ethers.utils.Interface {
  functions: {
    "candidate()": FunctionFragment;
    "notifyRewardAmount(tuple)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardsDistribution()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setRewardsDistribution(address)": FunctionFragment;
    "token()": FunctionFragment;
    "updateOwner()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "candidate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [{ d: BigNumberish }]
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
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setRewardsDistribution",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "candidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class RewardsDistributionRecipient extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RewardsDistributionRecipientInterface;

  functions: {
    candidate(overrides?: CallOverrides): Promise<[string]>;

    "candidate()"(overrides?: CallOverrides): Promise<[string]>;

    notifyRewardAmount(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "notifyRewardAmount(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    rewardsDistribution(overrides?: CallOverrides): Promise<[string]>;

    "rewardsDistribution()"(overrides?: CallOverrides): Promise<[string]>;

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

    token(overrides?: Overrides): Promise<ContractTransaction>;

    "token()"(overrides?: Overrides): Promise<ContractTransaction>;

    updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  candidate(overrides?: CallOverrides): Promise<string>;

  "candidate()"(overrides?: CallOverrides): Promise<string>;

  notifyRewardAmount(
    _amount: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "notifyRewardAmount(tuple)"(
    _amount: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  rewardsDistribution(overrides?: CallOverrides): Promise<string>;

  "rewardsDistribution()"(overrides?: CallOverrides): Promise<string>;

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

  token(overrides?: Overrides): Promise<ContractTransaction>;

  "token()"(overrides?: Overrides): Promise<ContractTransaction>;

  updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

  "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    candidate(overrides?: CallOverrides): Promise<string>;

    "candidate()"(overrides?: CallOverrides): Promise<string>;

    notifyRewardAmount(
      _amount: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "notifyRewardAmount(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    rewardsDistribution(overrides?: CallOverrides): Promise<string>;

    "rewardsDistribution()"(overrides?: CallOverrides): Promise<string>;

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

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

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
    candidate(overrides?: CallOverrides): Promise<BigNumber>;

    "candidate()"(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "notifyRewardAmount(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    rewardsDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardsDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

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

    token(overrides?: Overrides): Promise<BigNumber>;

    "token()"(overrides?: Overrides): Promise<BigNumber>;

    updateOwner(overrides?: Overrides): Promise<BigNumber>;

    "updateOwner()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    candidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "candidate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "notifyRewardAmount(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

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

    token(overrides?: Overrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    updateOwner(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
