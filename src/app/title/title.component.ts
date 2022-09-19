import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Bem-vindo';

  constructor() {}

  ngOnChanges(): void {
    console.log('Foi alterado com sucesso');
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('Foi destruido');
  }
}
