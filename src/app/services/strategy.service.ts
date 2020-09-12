import { Injectable } from '@angular/core';
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

  constructor() {}

  getStrategies(): Strategy[] {
    return this.strategies;
  }
  getStrategy(id: String): Strategy {
    return this.strategies.filter((s) => s.id === id)[0];
  }
}
