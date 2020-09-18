import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { Ng9OdometerModule } from 'ng9-odometer';

import { ResponsiveModule } from 'ngx-responsive';

import { CardModule } from 'primeng/card';
import { OrderListModule } from 'primeng/orderlist';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

import { ChartModule } from 'primeng/chart';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BetStrategyComponent } from './pages/bet-strategy/bet-strategy.component';
import { AddBetComponent } from './components/add-bet/add-bet.component';
import { BetComponent } from './components/bet/bet.component';
import { StrategyChartComponent } from './components/strategy-chart/strategy-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BetStrategyComponent,
    AddBetComponent,
    BetComponent,
    StrategyChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    OrderListModule,
    Ng9OdometerModule.forRoot(),
    MenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    ResponsiveModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
