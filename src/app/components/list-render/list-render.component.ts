import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {nome: "Luke", type: "Cão", age: 8},
    {nome: "Maria", type: "Gato", age: 13},
    {nome: "Liguini", type: "Cobra", age: 18},
    {nome: "Antero", type: "Cavalo", age: 12},
  ];

  animalDetails = ''

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.nome}, do tipo: ${animal.type} tem ${animal.age} anos.`;
  }

  removeAnimal(animal: Animal) {
   this.animals =  this.listService.remove(this.animals, animal);
  }

}
