import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  produtos: string[] = [];

  menuType: string = 'user-random';

  constructor() {
    this.produtos = ['mouse', 'teclado', 'cabos', 'fonte'];
  }

  ngOnInit(): void {}

  adicionar() {
    this.produtos.push('fulano');
  }

  remover(index: number) {
    this.produtos.splice(index, 1);
  }
}
