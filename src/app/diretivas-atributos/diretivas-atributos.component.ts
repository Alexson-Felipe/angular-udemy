import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public heightVar: string = '20px';
  public backColor: string = 'rgb(145, 155, 158)';
  public nome: string = '';
  public list: Array<{ nome: string }> = [{ nome: 'Alex' }];
  public date: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if (this.heightVar == '20px') {
        //this.heightVar = '50px';
        this.backColor = 'blue';
      } else {
        this.heightVar = '20px';
        this.backColor = 'rgb(145, 155, 158)';
      }
    }, 2000);
  }

  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = '';
  }
}
