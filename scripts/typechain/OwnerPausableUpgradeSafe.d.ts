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

interface OwnerPausableUpgradeSafeInterface extends ethers.utils.Interface {
  functions: {
    "candidate()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateOwner()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "candidate", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "candidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export class OwnerPausableUpgradeSafe extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: OwnerPausableUpgradeSafeInterface;

  functions: {
    candidate(overrides?: CallOverrides): Promise<[string]>;

    "candidate()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pause(overrides?: Overrides): Promise<ContractTransaction>;

    "pause()"(overrides?: Overrides): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    "paused()"(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unpause(overrides?: Overrides): Promise<ContractTransaction>;

    "unpause()"(overrides?: Overrides): Promise<ContractTransaction>;

    updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  candidate(overrides?: CallOverrides): Promise<string>;

  "candidate()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pause(overrides?: Overrides): Promise<ContractTransaction>;

  "pause()"(overrides?: Overrides): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  "paused()"(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOwner(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unpause(overrides?: Overrides): Promise<ContractTransaction>;

  "unpause()"(overrides?: Overrides): Promise<ContractTransaction>;

  updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

  "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    candidate(overrides?: CallOverrides): Promise<string>;

    "candidate()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    "pause()"(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    "paused()"(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    "unpause()"(overrides?: CallOverrides): Promise<void>;

    updateOwner(overrides?: CallOverrides): Promise<void>;

    "updateOwner()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Paused(account: null): EventFilter;

    Unpaused(account: null): EventFilter;
  };

  estimateGas: {
    candidate(overrides?: CallOverrides): Promise<BigNumber>;

    "candidate()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides): Promise<BigNumber>;

    "pause()"(overrides?: Overrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setOwner(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unpause(overrides?: Overrides): Promise<BigNumber>;

    "unpause()"(overrides?: Overrides): Promise<BigNumber>;

    updateOwner(overrides?: Overrides): Promise<BigNumber>;

    "updateOwner()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    candidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "candidate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(overrides?: Overrides): Promise<PopulatedTransaction>;

    "pause()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unpause(overrides?: Overrides): Promise<PopulatedTransaction>;

    "unpause()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    updateOwner(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
