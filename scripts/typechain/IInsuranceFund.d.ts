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

interface IInsuranceFundInterface extends ethers.utils.Interface {
  functions: {
    "getAllAmms()": FunctionFragment;
    "isExistedAmm(address)": FunctionFragment;
    "withdraw(address,tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAllAmms",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isExistedAmm",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, { d: BigNumberish }]
  ): string;

  decodeFunctionResult(functionFragment: "getAllAmms", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isExistedAmm",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class IInsuranceFund extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IInsuranceFundInterface;

  functions: {
    getAllAmms(overrides?: CallOverrides): Promise<[string[]]>;

    "getAllAmms()"(overrides?: CallOverrides): Promise<[string[]]>;

    isExistedAmm(_amm: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isExistedAmm(address)"(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdraw(
      _quoteToken: string,
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(address,tuple)"(
      _quoteToken: string,
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getAllAmms(overrides?: CallOverrides): Promise<string[]>;

  "getAllAmms()"(overrides?: CallOverrides): Promise<string[]>;

  isExistedAmm(_amm: string, overrides?: CallOverrides): Promise<boolean>;

  "isExistedAmm(address)"(
    _amm: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdraw(
    _quoteToken: string,
    _amount: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(address,tuple)"(
    _quoteToken: string,
    _amount: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getAllAmms(overrides?: CallOverrides): Promise<string[]>;

    "getAllAmms()"(overrides?: CallOverrides): Promise<string[]>;

    isExistedAmm(_amm: string, overrides?: CallOverrides): Promise<boolean>;

    "isExistedAmm(address)"(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdraw(
      _quoteToken: string,
      _amount: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,tuple)"(
      _quoteToken: string,
      _amount: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getAllAmms(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllAmms()"(overrides?: CallOverrides): Promise<BigNumber>;

    isExistedAmm(_amm: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isExistedAmm(address)"(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _quoteToken: string,
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdraw(address,tuple)"(
      _quoteToken: string,
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllAmms(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAllAmms()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isExistedAmm(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isExistedAmm(address)"(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _quoteToken: string,
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address,tuple)"(
      _quoteToken: string,
      _amount: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
