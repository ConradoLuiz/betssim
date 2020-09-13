import { Component, OnInit } from '@angular/core';
import { StrategyService } from 'src/app/services/strategy.service';
import { Strategy } from 'src/app/models/Strategy';
import { ActivatedRoute } from '@angular/router';
import { Bet } from 'src/app/models/Bet';
import { BetService } from 'src/app/services/bet.service';

@Component({
  selector: 'app-bet-strategie',
  templateUrl: './bet-strategie.component.html',
  styleUrls: ['./bet-strategie.component.css'],
})
export class BetStrategyComponent implements OnInit {
  strategy: Strategy;
  bets: Bet[];

  constructor(
    private strategyService: StrategyService,
    private betService: BetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.strategy = this.strategyService.getStrategy(id);
      this.bets = this.betService.getBets(id);
    });
  }

  addBet(bet: Bet) {
    this.betService.placeBet(bet);
    this.bets.unshift(bet);
  }
}
