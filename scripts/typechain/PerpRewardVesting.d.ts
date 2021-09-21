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

interface PerpRewardVestingInterface extends ethers.utils.Interface {
  functions: {
    "candidate()": FunctionFragment;
    "claimStatus(address,uint256,uint256)": FunctionFragment;
    "claimWeek(address,uint256,uint256,bytes32[])": FunctionFragment;
    "claimWeeks(address,tuple[])": FunctionFragment;
    "claimed(uint256,address)": FunctionFragment;
    "getLengthOfMerkleRoots()": FunctionFragment;
    "initialize(address,uint256)": FunctionFragment;
    "merkleRootIndexes(uint256)": FunctionFragment;
    "merkleRootTimestampMap(uint256)": FunctionFragment;
    "merkleRoots(uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "seedAllocations(uint256,bytes32,uint256)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "token()": FunctionFragment;
    "updateOwner()": FunctionFragment;
    "verifyClaim(address,uint256,uint256,bytes32[])": FunctionFragment;
    "vestingPeriod()": FunctionFragment;
    "weekMerkleRoots(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "candidate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimStatus",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimWeek",
    values: [string, BigNumberish, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimWeeks",
    values: [
      string,
      { week: BigNumberish; balance: BigNumberish; merkleProof: BytesLike[] }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimed",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLengthOfMerkleRoots",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRootIndexes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRootTimestampMap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoots",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seedAllocations",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verifyClaim",
    values: [string, BigNumberish, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "vestingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "weekMerkleRoots",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "candidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimWeek", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimWeeks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLengthOfMerkleRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "merkleRootIndexes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRootTimestampMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "seedAllocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "weekMerkleRoots",
    data: BytesLike
  ): Result;

  events: {
    "Claimed(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class PerpRewardVesting extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PerpRewardVestingInterface;

  functions: {
    candidate(overrides?: CallOverrides): Promise<[string]>;

    "candidate()"(overrides?: CallOverrides): Promise<[string]>;

    claimStatus(
      _liquidityProvider: string,
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean[]]>;

    "claimStatus(address,uint256,uint256)"(
      _liquidityProvider: string,
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean[]]>;

    claimWeek(
      _account: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claimWeek(address,uint256,uint256,bytes32[])"(
      _account: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claimWeeks(
      _account: string,
      _claims: {
        week: BigNumberish;
        balance: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claimWeeks(address,tuple[])"(
      _account: string,
      _claims: {
        week: BigNumberish;
        balance: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claimed(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "claimed(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getLengthOfMerkleRoots(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getLengthOfMerkleRoots()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _token: string,
      _vestingPeriod: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,uint256)"(
      _token: string,
      _vestingPeriod: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    merkleRootIndexes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "merkleRootIndexes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    merkleRootTimestampMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "merkleRootTimestampMap(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    merkleRoots(
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    "merkleRoots(uint256,uint256)"(
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    seedAllocations(
      _week: BigNumberish,
      _merkleRoot: BytesLike,
      _totalAllocation: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "seedAllocations(uint256,bytes32,uint256)"(
      _week: BigNumberish,
      _merkleRoot: BytesLike,
      _totalAllocation: BigNumberish,
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

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;

    verifyClaim(
      _liquidityProvider: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean] & { valid: boolean }>;

    "verifyClaim(address,uint256,uint256,bytes32[])"(
      _liquidityProvider: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean] & { valid: boolean }>;

    vestingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    "vestingPeriod()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    weekMerkleRoots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "weekMerkleRoots(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  candidate(overrides?: CallOverrides): Promise<string>;

  "candidate()"(overrides?: CallOverrides): Promise<string>;

  claimStatus(
    _liquidityProvider: string,
    _begin: BigNumberish,
    _end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  "claimStatus(address,uint256,uint256)"(
    _liquidityProvider: string,
    _begin: BigNumberish,
    _end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  claimWeek(
    _account: string,
    _week: BigNumberish,
    _claimedBalance: BigNumberish,
    _merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claimWeek(address,uint256,uint256,bytes32[])"(
    _account: string,
    _week: BigNumberish,
    _claimedBalance: BigNumberish,
    _merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claimWeeks(
    _account: string,
    _claims: {
      week: BigNumberish;
      balance: BigNumberish;
      merkleProof: BytesLike[];
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claimWeeks(address,tuple[])"(
    _account: string,
    _claims: {
      week: BigNumberish;
      balance: BigNumberish;
      merkleProof: BytesLike[];
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claimed(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "claimed(uint256,address)"(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getLengthOfMerkleRoots(overrides?: CallOverrides): Promise<BigNumber>;

  "getLengthOfMerkleRoots()"(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _token: string,
    _vestingPeriod: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,uint256)"(
    _token: string,
    _vestingPeriod: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  merkleRootIndexes(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "merkleRootIndexes(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  merkleRootTimestampMap(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "merkleRootTimestampMap(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  merkleRoots(
    _begin: BigNumberish,
    _end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "merkleRoots(uint256,uint256)"(
    _begin: BigNumberish,
    _end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  seedAllocations(
    _week: BigNumberish,
    _merkleRoot: BytesLike,
    _totalAllocation: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "seedAllocations(uint256,bytes32,uint256)"(
    _week: BigNumberish,
    _merkleRoot: BytesLike,
    _totalAllocation: BigNumberish,
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

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  updateOwner(overrides?: Overrides): Promise<ContractTransaction>;

  "updateOwner()"(overrides?: Overrides): Promise<ContractTransaction>;

  verifyClaim(
    _liquidityProvider: string,
    _week: BigNumberish,
    _claimedBalance: BigNumberish,
    _merkleProof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyClaim(address,uint256,uint256,bytes32[])"(
    _liquidityProvider: string,
    _week: BigNumberish,
    _claimedBalance: BigNumberish,
    _merkleProof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  vestingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "vestingPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  weekMerkleRoots(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "weekMerkleRoots(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    candidate(overrides?: CallOverrides): Promise<string>;

    "candidate()"(overrides?: CallOverrides): Promise<string>;

    claimStatus(
      _liquidityProvider: string,
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    "claimStatus(address,uint256,uint256)"(
      _liquidityProvider: string,
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    claimWeek(
      _account: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "claimWeek(address,uint256,uint256,bytes32[])"(
      _account: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimWeeks(
      _account: string,
      _claims: {
        week: BigNumberish;
        balance: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "claimWeeks(address,tuple[])"(
      _account: string,
      _claims: {
        week: BigNumberish;
        balance: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimed(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "claimed(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getLengthOfMerkleRoots(overrides?: CallOverrides): Promise<BigNumber>;

    "getLengthOfMerkleRoots()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _token: string,
      _vestingPeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,uint256)"(
      _token: string,
      _vestingPeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    merkleRootIndexes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "merkleRootIndexes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRootTimestampMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "merkleRootTimestampMap(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoots(
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "merkleRoots(uint256,uint256)"(
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    seedAllocations(
      _week: BigNumberish,
      _merkleRoot: BytesLike,
      _totalAllocation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "seedAllocations(uint256,bytes32,uint256)"(
      _week: BigNumberish,
      _merkleRoot: BytesLike,
      _totalAllocation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    updateOwner(overrides?: CallOverrides): Promise<void>;

    "updateOwner()"(overrides?: CallOverrides): Promise<void>;

    verifyClaim(
      _liquidityProvider: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyClaim(address,uint256,uint256,bytes32[])"(
      _liquidityProvider: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    vestingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "vestingPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    weekMerkleRoots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "weekMerkleRoots(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    Claimed(_claimant: null, _balance: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    candidate(overrides?: CallOverrides): Promise<BigNumber>;

    "candidate()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimStatus(
      _liquidityProvider: string,
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimStatus(address,uint256,uint256)"(
      _liquidityProvider: string,
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimWeek(
      _account: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claimWeek(address,uint256,uint256,bytes32[])"(
      _account: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    claimWeeks(
      _account: string,
      _claims: {
        week: BigNumberish;
        balance: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claimWeeks(address,tuple[])"(
      _account: string,
      _claims: {
        week: BigNumberish;
        balance: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    claimed(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimed(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLengthOfMerkleRoots(overrides?: CallOverrides): Promise<BigNumber>;

    "getLengthOfMerkleRoots()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _token: string,
      _vestingPeriod: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,uint256)"(
      _token: string,
      _vestingPeriod: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    merkleRootIndexes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "merkleRootIndexes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRootTimestampMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "merkleRootTimestampMap(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoots(
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "merkleRoots(uint256,uint256)"(
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    seedAllocations(
      _week: BigNumberish,
      _merkleRoot: BytesLike,
      _totalAllocation: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "seedAllocations(uint256,bytes32,uint256)"(
      _week: BigNumberish,
      _merkleRoot: BytesLike,
      _totalAllocation: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setOwner(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateOwner(overrides?: Overrides): Promise<BigNumber>;

    "updateOwner()"(overrides?: Overrides): Promise<BigNumber>;

    verifyClaim(
      _liquidityProvider: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyClaim(address,uint256,uint256,bytes32[])"(
      _liquidityProvider: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vestingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "vestingPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    weekMerkleRoots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "weekMerkleRoots(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    candidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "candidate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimStatus(
      _liquidityProvider: string,
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimStatus(address,uint256,uint256)"(
      _liquidityProvider: string,
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimWeek(
      _account: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claimWeek(address,uint256,uint256,bytes32[])"(
      _account: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claimWeeks(
      _account: string,
      _claims: {
        week: BigNumberish;
        balance: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claimWeeks(address,tuple[])"(
      _account: string,
      _claims: {
        week: BigNumberish;
        balance: BigNumberish;
        merkleProof: BytesLike[];
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claimed(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimed(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLengthOfMerkleRoots(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLengthOfMerkleRoots()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _token: string,
      _vestingPeriod: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,uint256)"(
      _token: string,
      _vestingPeriod: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    merkleRootIndexes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "merkleRootIndexes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRootTimestampMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "merkleRootTimestampMap(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoots(
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "merkleRoots(uint256,uint256)"(
      _begin: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    seedAllocations(
      _week: BigNumberish,
      _merkleRoot: BytesLike,
      _totalAllocation: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "seedAllocations(uint256,bytes32,uint256)"(
      _week: BigNumberish,
      _merkleRoot: BytesLike,
      _totalAllocation: BigNumberish,
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

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateOwner(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updateOwner()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    verifyClaim(
      _liquidityProvider: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyClaim(address,uint256,uint256,bytes32[])"(
      _liquidityProvider: string,
      _week: BigNumberish,
      _claimedBalance: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vestingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vestingPeriod()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weekMerkleRoots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "weekMerkleRoots(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
