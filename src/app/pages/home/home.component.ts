import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Strategy } from 'src/app/models/Strategy';
import { StrategyService } from 'src/app/services/strategy.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  strategies: Strategy[];

  newStratModal: boolean = false;
  strategyName: string;
  strategyBalance: string;

  constructor(
    private strategieService: StrategyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.strategies = this.strategieService.getStrategies();
  }

  cardClick(id: string) {
    this.router.navigate(['strategy', id]);
  }

  createStrat() {
    this.newStratModal = true;
  }

  createNewStrat() {
    if (!this.strategyName || !this.strategyBalance) return;

    const newStrat: Strategy = {
      id: uuidv4(),
      name: this.strategyName,
      balance: parseFloat(this.strategyBalance),
      startingBalance: parseFloat(this.strategyBalance),
    };

    this.strategies = this.strategieService.createStrategy(newStrat);
    this.router.navigate(['strategy', newStrat.id]);
  }
}
