import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DankQuotesService {

  constructor() { }

  getMyDankQuote(): Observable<string> {
    const quotes = [
      "Um, Um there's too much pressure",
      "That's great for my goals app",
      "I don't know",
      "I wanted to think of an actual quote, there's too much pressure",
      "it's soooo stupid"
    ];
    const item = this.getRandomArbitrary(0, quotes.length - 1)
    // console.log("item is: ", item);
    const quote = quotes[item];
    // console.log("quote is: ", quote);
    return of(quote);
  }

  private getRandomArbitrary(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
