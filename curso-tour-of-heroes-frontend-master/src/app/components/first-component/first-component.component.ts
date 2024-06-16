import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  nome: string = "Lucas";
  endereco: string = "Qnn";
  idade: number = 18;
  carro: string = "VW";
  anoCarro: number = 2015;
  car = {
    name: 'VW',
    year: 2019,
  }


  constructor() { }

  ngOnInit(): void {
  }

}
