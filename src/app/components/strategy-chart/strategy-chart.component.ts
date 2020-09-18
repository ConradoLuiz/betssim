import { Component, Input, OnInit } from '@angular/core';
import { Bet, BetState } from 'src/app/models/Bet';
import { Strategy } from 'src/app/models/Strategy';

@Component({
  selector: 'app-strategy-chart',
  templateUrl: './strategy-chart.component.html',
  styleUrls: ['./strategy-chart.component.css'],
})
export class StrategyChartComponent implements OnInit {
  @Input() strategy: Strategy;
  @Input() bets: Bet[];

  options: any;
  data: any;
  betSeries: number[];
  betLabels: string[];

  constructor() {}

  ngOnInit(): void {
    [this.betSeries, this.betLabels] = this.buildSeries(
      this.strategy.startingBalance,
      this.bets
    );
    this.data = {
      labels: this.betLabels,
      datasets: [
        {
          label: this.strategy.name,
          data: this.betSeries,
          fill: true,
          borderColor: '#4bc0c0',
        },
      ],
    };
    this.options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
  }

  ngOnChanges() {
    [this.betSeries, this.betLabels] = this.buildSeries(
      this.strategy.startingBalance,
      this.bets
    );
    this.data = {
      labels: this.betLabels,
      datasets: [
        {
          label: this.strategy.name,
          data: this.betSeries,
          fill: true,
          borderColor: '#4bc0c0',
        },
      ],
    };
  }

  private buildSeries(startingBalance, bets: Bet[]) {
    const series = [startingBalance];
    const betsLabels = ['Starting Balance'];

    for (let i = 1; i <= bets.length; i++) {
      const bet = bets[i - 1];

      let nextBalance;
      if (bet.state == BetState.LOST) nextBalance = series[i - 1] - bet.stake;
      else if (bet.state == BetState.HOLD)
        nextBalance = series[i - 1] - bet.stake;
      else if (bet.state == BetState.WON)
        nextBalance = series[i - 1] + bet.stake * bet.odd;

      series.push(nextBalance);
      betsLabels.push(bet.title);
    }
    console.log(series);

    return [series, betsLabels];
  }
}
