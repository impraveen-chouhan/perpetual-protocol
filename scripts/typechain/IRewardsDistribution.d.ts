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

interface IRewardsDistributionInterface extends ethers.utils.Interface {
  functions: {
    "distributeRewards(tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "distributeRewards",
    values: [{ d: BigNumberish }]
  ): string;

  decodeFunctionResult(
    functionFragment: "distributeRewards",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRewardsDistribution extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IRewardsDistributionInterface;

  functions: {
    distributeRewards(
      arg0: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "distributeRewards(tuple)"(
      arg0: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  distributeRewards(
    arg0: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "distributeRewards(tuple)"(
    arg0: { d: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    distributeRewards(
      arg0: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "distributeRewards(tuple)"(
      arg0: { d: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    distributeRewards(
      arg0: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "distributeRewards(tuple)"(
      arg0: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    distributeRewards(
      arg0: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "distributeRewards(tuple)"(
      arg0: { d: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
