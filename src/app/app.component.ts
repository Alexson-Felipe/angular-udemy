import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  ///template: '<router-outlet></router-outlet> ',
})
export class AppComponent implements OnInit {
  public valor: number = 1;
  public destruir: boolean = true;
  public desativado: boolean = true;
  public nome: string = 'Alex';
  public condicao: boolean = false;
  constructor() {}

  public adicionar(): number {
    return (this.valor += 1);
  }
  public destruirComponent() {
    if (this.desativado) {
      this.desativado = false;
      this.destruir = false;
    } else {
      this.desativado = true;
      this.destruir = true;
    }
  }

  ngOnInit(): void {}

  public condicaoFuncao(): void {
    if (this.condicao) {
      this.condicao = false;
    } else {
      this.condicao = true;
    }
  }
  /*
  ngDoCheck(): void {
    console.log(
      'ngDoCheck -> Este evento é disparado sempre qua as propriedades de entrada de um componente são verificadas.'
    );
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log(
      'ngAfterContentChecked -> Este método de gancho de ciclo de vida é executando sempre que o conteúdo do componente é verificado pelo mecanismo de detecção de alteração do Angular.'
    );
  }

  ngAfterViewInit(): void {
    console.log(
      'ngAfterViewInit -> Este método de gancho de ciclo de vida é executado quando a visualização do componente foi totalmente inicializada'
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      'ngAfterViewChecked -> Ele é executado toda vez que a visualização de um determinado componente foi verificada pelo algoritmo de detecção de alterações do Angular.'
    );
  }
  */
}
