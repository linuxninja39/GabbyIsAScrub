import { Component, OnInit } from '@angular/core';
import {DankQuotesService} from '../../services/dank-quotes.service';

@Component({
  selector: 'app-thing-two',
  templateUrl: './thing-two.component.html',
  styleUrls: ['./thing-two.component.scss']
})
export class ThingTwoComponent implements OnInit {
  quote: string;

  constructor(private dankQuotesService: DankQuotesService) { }

  ngOnInit(): void {
  }

  getQuote() {
    let myVar = 'coolness';
    let myVar2 = 'megan is a cutie pie';
    let myVar3 = 'yo dog';
    this.dankQuotesService.getMyDankQuote(myVar, myVar2, myVar3)
      .subscribe(
        value => {
          console.log('got quote from server', value);
          this.quote = value;
        }
      );
  }
}
