import { Component, Input, OnInit } from '@angular/core';
import { BitCoinService } from 'src/app/services/bitCoin.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chart: Object = null;
  data = [];
  constructor(private bitCoinService: BitCoinService) {}

  async ngOnInit(): Promise<void> {
    const chart = await this.bitCoinService.getMarketPrice();
    this.data = chart;
  }
}
