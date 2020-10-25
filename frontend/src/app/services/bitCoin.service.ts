import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Axios from 'axios';

const KEY_COIN = 'coin';

@Injectable({
  providedIn: 'root',
})
export class BitCoinService {
  constructor(private http: HttpClient) {}

  public async getRate(coins = 1): Promise<Number> {
    const res = await Axios.get<Number>(
      `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    );
    return res.data;
  }

  public async getMarketPrice(): Promise<Object[]> {
    const res = await Axios.get<Object>(
      `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
    );
    return res.data['values'].map((val) => {
      const time = new Date(val.x * 1000);
      return [time.toDateString(), val.y];
    });
   
  }

  public getConfirmedTransactions() {}
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return JSON.parse(val);
}
