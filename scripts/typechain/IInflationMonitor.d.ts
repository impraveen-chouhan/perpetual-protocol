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

interface IInflationMonitorInterface extends ethers.utils.Interface {
  functions: {
    "appendMintedTokenHistory(tuple)": FunctionFragment;
    "isOverMintThreshold()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "appendMintedTokenHistory",
    values: [{ d: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "isOverMintThreshold",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "appendMintedTokenHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOverMintThreshold",
    data: BytesLike
  ): Result;

  events: {};
}

export class IInflationMonitor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IInflationMonitorInterface;

  functions: {
    appendMintedTokenHistory(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "appendMintedTokenHistory(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isOverMintThreshold(overrides?: CallOverrides): Promise<[boolean]>;

    "isOverMintThreshold()"(overrides?: CallOverrides): Promise<[boolean]>;
  };

  appendMintedTokenHistory(
    _amount: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "appendMintedTokenHistory(tuple)"(
    _amount: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isOverMintThreshold(overrides?: CallOverrides): Promise<boolean>;

  "isOverMintThreshold()"(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    appendMintedTokenHistory(
      _amount: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "appendMintedTokenHistory(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    isOverMintThreshold(overrides?: CallOverrides): Promise<boolean>;

    "isOverMintThreshold()"(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    appendMintedTokenHistory(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "appendMintedTokenHistory(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    isOverMintThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    "isOverMintThreshold()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    appendMintedTokenHistory(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "appendMintedTokenHistory(tuple)"(
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isOverMintThreshold(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isOverMintThreshold()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
