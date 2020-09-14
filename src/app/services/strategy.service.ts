import { Injectable } from '@angular/core';
import { Bet } from '../models/Bet';
import { Strategy } from '../models/Strategy';

@Injectable({
  providedIn: 'root',
})
export class StrategyService {
  strategies: Strategy[] = [
    {
      id: 'fjsdkflsdjfkl',
      name: 'Main Strategy',
      balance: 550.0,
      startingBalance: 300.0,
    },
    {
      id: 'jsdkflsdjfkls',
      name: 'Perfect Kelly',
      balance: 220.0,
      startingBalance: 300.0,
    },
  ];

  constructor() {
    this.strategies = JSON.parse(window.localStorage.getItem('_st')) || [];
  }

  getStrategies(): Strategy[] {
    return this.strategies;
  }

  getStrategy(id: String): Strategy {
    return this.strategies.filter((s) => s.id === id)[0];
  }

  registerBet(bet: Bet) {
    this.strategies = this.strategies.map((s) =>
      s.id === bet.strategyId
        ? Object.assign(s, { balance: s.balance - bet.stake })
        : s
    );
    this.saveStrategies();
    return this.strategies;
  }

  registerWin(bet: Bet) {
    this.strategies = this.strategies.map((s) =>
      s.id === bet.strategyId
        ? Object.assign(s, { balance: s.balance + bet.stake * bet.odd })
        : s
    );
    this.saveStrategies();
    return this.strategies;
  }

  createStrategy(strategy: Strategy): Strategy[] {
    this.strategies.unshift(strategy);
    this.saveStrategies();
    return this.strategies;
  }

  private saveStrategies() {
    window.localStorage.setItem('_st', JSON.stringify(this.strategies));
  }
}
