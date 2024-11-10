import { Component } from '@angular/core';
import { InvestMentService } from './investment-results/investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'investment-calculator';

  constructor(private investMentService: InvestMentService) {}

  get annualDataProjections() {
    return this.investMentService.getAnnualData();
  }
}
