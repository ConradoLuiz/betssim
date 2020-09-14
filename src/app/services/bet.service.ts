import { Injectable } from '@angular/core';
import { Bet, BetState } from '../models/Bet';
import { Strategy } from '../models/Strategy';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  bets: Bet[] = [];

  constructor() {
    this.bets = JSON.parse(window.localStorage.getItem('_bs')) || [];
  }

  getBets(strategyId: string) {
    return this.bets.filter((b) => b.strategyId === strategyId);
  }

  getBet(id: string) {
    return this.bets.filter((b) => b.id === id)[0];
  }

  placeBet(bet: Bet): Bet[] {
    this.bets.unshift(bet);
    this.saveBets();
    return this.getBets(bet.strategyId);
  }

  winBet(bet: Bet) {
    this.bets = this.bets.map((b) =>
      b.id === bet.id ? Object.assign(b, { state: BetState.WON }) : b
    );
    this.saveBets();
    return this.getBets(bet.strategyId);
  }

  loseBet(bet: Bet) {
    this.bets = this.bets.map((b) =>
      b.id === bet.id ? Object.assign(b, { state: BetState.LOST }) : b
    );
    this.saveBets();
    return this.getBets(bet.strategyId);
  }

  removeBet(bet: Bet) {
    this.bets = this.bets.filter((b) => b.id !== bet.id);
    this.saveBets();
    return this.getBets(bet.strategyId);
  }

  revertBet(bet: Bet) {
    this.bets = this.bets.map((b) =>
      b.id === bet.id ? Object.assign(b, { state: BetState.HOLD }) : b
    );
    this.saveBets();
    return this.getBets(bet.strategyId);
  }

  private saveBets() {
    window.localStorage.setItem('_bs', JSON.stringify(this.bets));
  }
}
