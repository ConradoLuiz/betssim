import { Component, OnInit, Input } from '@angular/core';
import { Strategy } from 'src/app/models/Strategy';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() strategy: Strategy;

  constructor() {}

  ngOnInit(): void {}
}
