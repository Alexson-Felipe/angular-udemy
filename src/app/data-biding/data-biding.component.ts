import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public nome: string = 'Alex';
  public idade: number = 29;
  public maisUm: number = 1;
  public checkedDisabled: boolean = true;
  public imgSrc: string =
    'https://s.udemycdn.com/partner-logos/v4/box-light.svg';
  public imgTitle: string = 'Property Binding';
  public backcolor: string = 'rgb(255, 255, 255)';

  constructor() {}

  ngOnInit(): void {}

  public position: { x: number; y: number } = { x: 0, y: 0 };

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    //console.log(valor);
    this.position.x = valor.offsetX;
    this.backcolor = 'rgb(' + valor.offsetX + ',' + valor.offsetY + ',0)';
    this.position.y = valor.offsetY;
    console.log(valor.movementX);
  }
}
