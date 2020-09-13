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
  odd: Number;
  stake: Number;
  state: BetState;
  probability?: Number;
}
