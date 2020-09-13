import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';
import { OrderListModule } from 'primeng/orderlist';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BetStrategyComponent } from './pages/bet-strategie/bet-strategie.component';
import { AddBetComponent } from './components/add-bet/add-bet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BetStrategyComponent,
    AddBetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    OrderListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
