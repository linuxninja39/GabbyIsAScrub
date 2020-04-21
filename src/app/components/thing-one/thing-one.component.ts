import {Component, OnInit} from '@angular/core';
import {DankQuotesService} from '../../services/dank-quotes.service';

@Component({
  selector: 'app-thing-one',
  templateUrl: './thing-one.component.html',
  styleUrls: ['./thing-one.component.scss']
})
export class ThingOneComponent implements OnInit {
  quote: string;

  constructor(private dankQuotesService: DankQuotesService) {
  }

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote() {
    this.dankQuotesService
      .getMyDankQuote()
      .subscribe(
        value => {
          console.log('got quote from server', value);
          this.quote = value;
        }
      );
  }

}



