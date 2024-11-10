import { Component } from '@angular/core';
import { InvestMentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  initialInvestment = 1000;
  annualInvestment = 1000;
  expectedReturn = 10;
  duration = 5;

  constructor(private investMentService: InvestMentService) {}

  onSubmit() {
    this.investMentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
    this.initialInvestment = 1000;
    this.annualInvestment = 1000;
    this.expectedReturn = 10;
    this.duration = 5;
  }
}
