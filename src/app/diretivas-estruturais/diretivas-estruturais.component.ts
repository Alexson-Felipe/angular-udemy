import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Alex Felipe', idade: 28 },
    { nome: 'Zé da Silva', idade: 32 },
    { nome: 'Aline Nandinha', idade: 21 },
  ];
  public nome: string = 'alex';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({ nome: 'Lian', idade: 22 });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }
}
