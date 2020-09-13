import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Bet, BetState } from 'src/app/models/Bet';
import { Strategy } from 'src/app/models/Strategy';

@Component({
  selector: 'app-add-bet',
  templateUrl: './add-bet.component.html',
  styleUrls: ['./add-bet.component.css'],
})
export class AddBetComponent implements OnInit {
  @Input() strategy: Strategy;
  @Output() addBet: EventEmitter<Bet> = new EventEmitter();

  title: string;
  event: string;
  stake: string | number;
  odd: string;
  probability: string;

  kelly: number;
  test: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const newBet: Bet = {
      id: uuidv4(),
      strategyId: this.strategy.id,
      title: this.title,
      event: this.event,
      stake: parseFloat(this.stake as string),
      odd: parseFloat(this.odd),
      probability: parseFloat(this.probability),
      state: BetState.HOLD,
    };

    this.addBet.emit(newBet);
  }

  getKelly(): number {
    this.kelly =
      (parseFloat(this.probability) * parseFloat(this.odd) - 1) /
      (parseFloat(this.odd) - 1);

    return this.kelly;
  }

  putKellyStake() {
    this.stake = this.kelly * this.strategy.balance;
  }
}
