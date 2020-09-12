import { Component, OnInit } from '@angular/core';
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
}
