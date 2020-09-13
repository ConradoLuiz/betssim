import { Injectable } from '@angular/core';
import { Bet } from '../models/Bet';
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

  placeBet(bet: Bet) {
    window.localStorage.setItem('_bs', JSON.stringify([bet, ...this.bets]));
    this.bets.push(bet);
  }

  winBet(id: string) {
    const newBet = this.bets.filter((b) => b.id === id)[0];
    this.bets = [...this.bets, Object.assign(newBet, { state: 'w' })];
  }
}
