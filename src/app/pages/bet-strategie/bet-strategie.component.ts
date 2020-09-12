import { Component, OnInit } from '@angular/core';
import { StrategyService } from 'src/app/services/strategy.service';
import { Strategy } from 'src/app/models/Strategy';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bet-strategie',
  templateUrl: './bet-strategie.component.html',
  styleUrls: ['./bet-strategie.component.css'],
})
export class BetStrategyComponent implements OnInit {
  strategy: Strategy;

  constructor(
    private strategyService: StrategyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.strategy = this.strategyService.getStrategy(id);
    });
  }
}
