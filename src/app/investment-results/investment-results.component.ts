import { Component, Input } from '@angular/core';
import { InvestmentResult } from './investment-result.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {

  @Input() annualDataProjections?: InvestmentResult[];

}
