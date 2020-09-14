export enum BetState {
  WON,
  LOST,
  HOLD,
}
export class Bet {
  id: string;
  strategyId: string;
  title: string;
  event: string;
  odd: number;
  stake: number;
  state: BetState;
  probability?: number;
  date: number;
}
