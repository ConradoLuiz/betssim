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
    if (!this.title || !this.event || !this.stake || !this.odd) {
      return;
    }
    if (this.stake > this.strategy.balance) {
      return;
    }

    const newBet: Bet = {
      id: uuidv4(),
      strategyId: this.strategy.id,
      title: this.title,
      event: this.event,
      stake: parseFloat(this.stake as string),
      odd: parseFloat(this.odd),
      probability: parseFloat(this.probability),
      state: BetState.HOLD,
      date: Date.now(),
    };

    this.addBet.emit(newBet);

    this.title = '';
    this.event = '';
    this.stake = '';
    this.odd = '';
    this.probability = '';
  }

  getKelly(): number {
    this.kelly =
      (parseFloat(this.probability) * parseFloat(this.odd) - 1) /
      (parseFloat(this.odd) - 1);

    return this.kelly;
  }

  putKellyStake() {
    const stake = this.kelly * this.strategy.balance;
    this.stake = Math.round((stake + Number.EPSILON) * 100) / 100;
  }
}
