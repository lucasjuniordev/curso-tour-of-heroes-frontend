import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-current-time-exemplo',
  templateUrl: './current-time-exemplo.component.html',
  styleUrls: ['./current-time-exemplo.component.css']
})
export class CurrentTimeExemploComponent implements OnInit {
  currentTime$: Observable<string> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.currentTime$ = interval(1000).pipe(
      map(() => new Date().toLocaleTimeString())
    );
  }

}
