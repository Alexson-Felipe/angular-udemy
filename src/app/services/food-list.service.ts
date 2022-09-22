import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // <- ele mostra para toda nossa aplicação, já está para qualquer um fazer injeção de dependencia.
})
export class FoodListService {
  private list: Array<string> = ['X Bacon', 'Feijão', 'Ovo'];
  constructor() {}

  public foodList() {
    return this.list;
  }

  public foodListAdd(value: string) {
    return this.list.push(value);
  }
}
