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

interface ClearingHouseMockInterface extends ethers.utils.Interface {
  functions: {
    "addMargin(address,tuple)": FunctionFragment;
    "closePosition(address,tuple)": FunctionFragment;
    "getMarginRatio(address,address)": FunctionFragment;
    "getPosition(address,address)": FunctionFragment;
    "liquidate(address,address)": FunctionFragment;
    "openPosition(address,uint8,tuple,tuple,tuple)": FunctionFragment;
    "payFunding(address)": FunctionFragment;
    "removeMargin(address,tuple)": FunctionFragment;
    "settlePosition(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addMargin",
    values: [string, { d: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [string, { d: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarginRatio",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPosition",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      string,
      BigNumberish,
      { d: BigNumberish },
      { d: BigNumberish },
      { d: BigNumberish }
    ]
  ): string;
  encodeFunctionData(functionFragment: "payFunding", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeMargin",
    values: [string, { d: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "settlePosition",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addMargin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarginRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payFunding", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeMargin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlePosition",
    data: BytesLike
  ): Result;

  events: {
    "TestEventForPayFunding(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TestEventForPayFunding"): EventFragment;
}

export class ClearingHouseMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ClearingHouseMockInterface;

  functions: {
    addMargin(
      _amm: string,
      _addedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addMargin(address,tuple)"(
      _amm: string,
      _addedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    closePosition(
      _amm: string,
      _quoteAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "closePosition(address,tuple)"(
      _amm: string,
      _quoteAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getMarginRatio(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { d: BigNumber }]>;

    "getMarginRatio(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { d: BigNumber }]>;

    getPosition(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          [BigNumber] & { d: BigNumber },
          [BigNumber] & { d: BigNumber },
          [BigNumber] & { d: BigNumber },
          [BigNumber] & { d: BigNumber },
          BigNumber,
          BigNumber
        ] & {
          size: [BigNumber] & { d: BigNumber };
          margin: [BigNumber] & { d: BigNumber };
          openNotional: [BigNumber] & { d: BigNumber };
          lastUpdatedCumulativePremiumFraction: [BigNumber] & { d: BigNumber };
          liquidityHistoryIndex: BigNumber;
          blockNumber: BigNumber;
        }
      ]
    >;

    "getPosition(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          [BigNumber] & { d: BigNumber },
          [BigNumber] & { d: BigNumber },
          [BigNumber] & { d: BigNumber },
          [BigNumber] & { d: BigNumber },
          BigNumber,
          BigNumber
        ] & {
          size: [BigNumber] & { d: BigNumber };
          margin: [BigNumber] & { d: BigNumber };
          openNotional: [BigNumber] & { d: BigNumber };
          lastUpdatedCumulativePremiumFraction: [BigNumber] & { d: BigNumber };
          liquidityHistoryIndex: BigNumber;
          blockNumber: BigNumber;
        }
      ]
    >;

    liquidate(
      _amm: string,
      _trader: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "liquidate(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    openPosition(
      _amm: string,
      _side: BigNumberish,
      _quoteAssetAmount: { d: BigNumberish },
      _leverage: { d: BigNumberish },
      _baseAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "openPosition(address,uint8,tuple,tuple,tuple)"(
      _amm: string,
      _side: BigNumberish,
      _quoteAssetAmount: { d: BigNumberish },
      _leverage: { d: BigNumberish },
      _baseAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    payFunding(
      _amm: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "payFunding(address)"(
      _amm: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeMargin(
      _amm: string,
      _removedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeMargin(address,tuple)"(
      _amm: string,
      _removedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    settlePosition(
      _amm: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "settlePosition(address)"(
      _amm: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addMargin(
    _amm: string,
    _addedMargin: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addMargin(address,tuple)"(
    _amm: string,
    _addedMargin: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  closePosition(
    _amm: string,
    _quoteAssetAmountLimit: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "closePosition(address,tuple)"(
    _amm: string,
    _quoteAssetAmountLimit: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getMarginRatio(
    _amm: string,
    _trader: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { d: BigNumber }>;

  "getMarginRatio(address,address)"(
    _amm: string,
    _trader: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { d: BigNumber }>;

  getPosition(
    _amm: string,
    _trader: string,
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber] & { d: BigNumber },
      [BigNumber] & { d: BigNumber },
      [BigNumber] & { d: BigNumber },
      [BigNumber] & { d: BigNumber },
      BigNumber,
      BigNumber
    ] & {
      size: [BigNumber] & { d: BigNumber };
      margin: [BigNumber] & { d: BigNumber };
      openNotional: [BigNumber] & { d: BigNumber };
      lastUpdatedCumulativePremiumFraction: [BigNumber] & { d: BigNumber };
      liquidityHistoryIndex: BigNumber;
      blockNumber: BigNumber;
    }
  >;

  "getPosition(address,address)"(
    _amm: string,
    _trader: string,
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber] & { d: BigNumber },
      [BigNumber] & { d: BigNumber },
      [BigNumber] & { d: BigNumber },
      [BigNumber] & { d: BigNumber },
      BigNumber,
      BigNumber
    ] & {
      size: [BigNumber] & { d: BigNumber };
      margin: [BigNumber] & { d: BigNumber };
      openNotional: [BigNumber] & { d: BigNumber };
      lastUpdatedCumulativePremiumFraction: [BigNumber] & { d: BigNumber };
      liquidityHistoryIndex: BigNumber;
      blockNumber: BigNumber;
    }
  >;

  liquidate(
    _amm: string,
    _trader: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "liquidate(address,address)"(
    _amm: string,
    _trader: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  openPosition(
    _amm: string,
    _side: BigNumberish,
    _quoteAssetAmount: { d: BigNumberish },
    _leverage: { d: BigNumberish },
    _baseAssetAmountLimit: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "openPosition(address,uint8,tuple,tuple,tuple)"(
    _amm: string,
    _side: BigNumberish,
    _quoteAssetAmount: { d: BigNumberish },
    _leverage: { d: BigNumberish },
    _baseAssetAmountLimit: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  payFunding(_amm: string, overrides?: Overrides): Promise<ContractTransaction>;

  "payFunding(address)"(
    _amm: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeMargin(
    _amm: string,
    _removedMargin: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeMargin(address,tuple)"(
    _amm: string,
    _removedMargin: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  settlePosition(
    _amm: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "settlePosition(address)"(
    _amm: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addMargin(
      _amm: string,
      _addedMargin: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "addMargin(address,tuple)"(
      _amm: string,
      _addedMargin: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    closePosition(
      _amm: string,
      _quoteAssetAmountLimit: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "closePosition(address,tuple)"(
      _amm: string,
      _quoteAssetAmountLimit: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    getMarginRatio(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { d: BigNumber }>;

    "getMarginRatio(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { d: BigNumber }>;

    getPosition(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber] & { d: BigNumber },
        [BigNumber] & { d: BigNumber },
        [BigNumber] & { d: BigNumber },
        [BigNumber] & { d: BigNumber },
        BigNumber,
        BigNumber
      ] & {
        size: [BigNumber] & { d: BigNumber };
        margin: [BigNumber] & { d: BigNumber };
        openNotional: [BigNumber] & { d: BigNumber };
        lastUpdatedCumulativePremiumFraction: [BigNumber] & { d: BigNumber };
        liquidityHistoryIndex: BigNumber;
        blockNumber: BigNumber;
      }
    >;

    "getPosition(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber] & { d: BigNumber },
        [BigNumber] & { d: BigNumber },
        [BigNumber] & { d: BigNumber },
        [BigNumber] & { d: BigNumber },
        BigNumber,
        BigNumber
      ] & {
        size: [BigNumber] & { d: BigNumber };
        margin: [BigNumber] & { d: BigNumber };
        openNotional: [BigNumber] & { d: BigNumber };
        lastUpdatedCumulativePremiumFraction: [BigNumber] & { d: BigNumber };
        liquidityHistoryIndex: BigNumber;
        blockNumber: BigNumber;
      }
    >;

    liquidate(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "liquidate(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<void>;

    openPosition(
      _amm: string,
      _side: BigNumberish,
      _quoteAssetAmount: { d: BigNumberish },
      _leverage: { d: BigNumberish },
      _baseAssetAmountLimit: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "openPosition(address,uint8,tuple,tuple,tuple)"(
      _amm: string,
      _side: BigNumberish,
      _quoteAssetAmount: { d: BigNumberish },
      _leverage: { d: BigNumberish },
      _baseAssetAmountLimit: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    payFunding(_amm: string, overrides?: CallOverrides): Promise<void>;

    "payFunding(address)"(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeMargin(
      _amm: string,
      _removedMargin: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "removeMargin(address,tuple)"(
      _amm: string,
      _removedMargin: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    settlePosition(_amm: string, overrides?: CallOverrides): Promise<void>;

    "settlePosition(address)"(
      _amm: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    TestEventForPayFunding(undefined: null): EventFilter;
  };

  estimateGas: {
    addMargin(
      _amm: string,
      _addedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addMargin(address,tuple)"(
      _amm: string,
      _addedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    closePosition(
      _amm: string,
      _quoteAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "closePosition(address,tuple)"(
      _amm: string,
      _quoteAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    getMarginRatio(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMarginRatio(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPosition(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPosition(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidate(
      _amm: string,
      _trader: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "liquidate(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    openPosition(
      _amm: string,
      _side: BigNumberish,
      _quoteAssetAmount: { d: BigNumberish },
      _leverage: { d: BigNumberish },
      _baseAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "openPosition(address,uint8,tuple,tuple,tuple)"(
      _amm: string,
      _side: BigNumberish,
      _quoteAssetAmount: { d: BigNumberish },
      _leverage: { d: BigNumberish },
      _baseAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    payFunding(_amm: string, overrides?: Overrides): Promise<BigNumber>;

    "payFunding(address)"(
      _amm: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeMargin(
      _amm: string,
      _removedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeMargin(address,tuple)"(
      _amm: string,
      _removedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    settlePosition(_amm: string, overrides?: Overrides): Promise<BigNumber>;

    "settlePosition(address)"(
      _amm: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMargin(
      _amm: string,
      _addedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addMargin(address,tuple)"(
      _amm: string,
      _addedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    closePosition(
      _amm: string,
      _quoteAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "closePosition(address,tuple)"(
      _amm: string,
      _quoteAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getMarginRatio(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMarginRatio(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPosition(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPosition(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidate(
      _amm: string,
      _trader: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "liquidate(address,address)"(
      _amm: string,
      _trader: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    openPosition(
      _amm: string,
      _side: BigNumberish,
      _quoteAssetAmount: { d: BigNumberish },
      _leverage: { d: BigNumberish },
      _baseAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "openPosition(address,uint8,tuple,tuple,tuple)"(
      _amm: string,
      _side: BigNumberish,
      _quoteAssetAmount: { d: BigNumberish },
      _leverage: { d: BigNumberish },
      _baseAssetAmountLimit: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    payFunding(
      _amm: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "payFunding(address)"(
      _amm: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeMargin(
      _amm: string,
      _removedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeMargin(address,tuple)"(
      _amm: string,
      _removedMargin: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    settlePosition(
      _amm: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "settlePosition(address)"(
      _amm: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
