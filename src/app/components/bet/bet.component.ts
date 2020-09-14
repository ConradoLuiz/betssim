import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bet, BetState } from 'src/app/models/Bet';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css'],
})
export class BetComponent implements OnInit {
  @Input() bet: Bet;
  @Output() winBet: EventEmitter<Bet> = new EventEmitter();
  @Output() loseBet: EventEmitter<Bet> = new EventEmitter();
  @Output() removeBet: EventEmitter<Bet> = new EventEmitter();
  @Output() revertBet: EventEmitter<Bet> = new EventEmitter();

  betState = BetState;
  menuItems: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Remove bet',
        icon: 'pi pi-fw pi-times',
        command: this.remove.bind(this),
      },
      {
        label: 'Revert result',
        icon: 'pi pi-fw pi-undo',
        command: this.revert.bind(this),
      },
    ];
  }

  wonBet() {
    if (this.bet.state !== this.betState.HOLD) return;
    this.winBet.emit(this.bet);
  }

  lostBet() {
    if (this.bet.state !== this.betState.HOLD) return;
    this.loseBet.emit(this.bet);
  }

  remove() {
    this.removeBet.emit(this.bet);
  }

  revert() {
    this.revertBet.emit(this.bet);
  }
}
