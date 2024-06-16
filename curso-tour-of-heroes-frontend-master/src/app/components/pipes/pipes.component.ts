import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  // Texto para demonstração de transformação de strings
  exemplosPipes: string = 'Angular Pipes Example';

  // Data atual em milissegundos desde 1 de janeiro de 1970
  textoTitulo: string = "Texto em formato de Título";
  
  // Data atual em milissegundos COMPLETA desde 1 de janeiro de 1970
  hoje = new Date();

  // Data atual em milissegundos desde 1 de janeiro de 1970
  today: number = Date.now();

  // Valor numérico para demonstração de pipes
  valoresUSD: number = 1234.56;

  // Texto para demonstração de transformação de strings
  exemplosPipesReverse: string = 'Angular Pipes Reverse Example';

  // Objeto para demonstração do JsonPipe
  object = { foo: 'bar', baz: 42 };

  // Promise para demonstração do AsyncPipe
  asyncValue = new Promise<string>((resolve) => {
    setTimeout(() => resolve('Async Pipe Example'), 2000);
  });

  constructor() { }

  ngOnInit(): void {
  }

}
