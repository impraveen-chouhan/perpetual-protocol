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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AmmReaderInterface extends ethers.utils.Interface {
  functions: {
    "getAmmStates(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAmmStates",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAmmStates",
    data: BytesLike
  ): Result;

  events: {};
}

export class AmmReader extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AmmReaderInterface;

  functions: {
    getAmmStates(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string,
          string,
          string,
          string
        ] & {
          quoteAssetReserve: BigNumber;
          baseAssetReserve: BigNumber;
          tradeLimitRatio: BigNumber;
          fundingPeriod: BigNumber;
          quoteAssetSymbol: string;
          baseAssetSymbol: string;
          priceFeedKey: string;
          priceFeed: string;
        }
      ]
    >;

    "getAmmStates(address)"(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string,
          string,
          string,
          string
        ] & {
          quoteAssetReserve: BigNumber;
          baseAssetReserve: BigNumber;
          tradeLimitRatio: BigNumber;
          fundingPeriod: BigNumber;
          quoteAssetSymbol: string;
          baseAssetSymbol: string;
          priceFeedKey: string;
          priceFeed: string;
        }
      ]
    >;
  };

  getAmmStates(
    _amm: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      string,
      string
    ] & {
      quoteAssetReserve: BigNumber;
      baseAssetReserve: BigNumber;
      tradeLimitRatio: BigNumber;
      fundingPeriod: BigNumber;
      quoteAssetSymbol: string;
      baseAssetSymbol: string;
      priceFeedKey: string;
      priceFeed: string;
    }
  >;

  "getAmmStates(address)"(
    _amm: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      string,
      string
    ] & {
      quoteAssetReserve: BigNumber;
      baseAssetReserve: BigNumber;
      tradeLimitRatio: BigNumber;
      fundingPeriod: BigNumber;
      quoteAssetSymbol: string;
      baseAssetSymbol: string;
      priceFeedKey: string;
      priceFeed: string;
    }
  >;

  callStatic: {
    getAmmStates(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string
      ] & {
        quoteAssetReserve: BigNumber;
        baseAssetReserve: BigNumber;
        tradeLimitRatio: BigNumber;
        fundingPeriod: BigNumber;
        quoteAssetSymbol: string;
        baseAssetSymbol: string;
        priceFeedKey: string;
        priceFeed: string;
      }
    >;

    "getAmmStates(address)"(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string
      ] & {
        quoteAssetReserve: BigNumber;
        baseAssetReserve: BigNumber;
        tradeLimitRatio: BigNumber;
        fundingPeriod: BigNumber;
        quoteAssetSymbol: string;
        baseAssetSymbol: string;
        priceFeedKey: string;
        priceFeed: string;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getAmmStates(_amm: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getAmmStates(address)"(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmmStates(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAmmStates(address)"(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
