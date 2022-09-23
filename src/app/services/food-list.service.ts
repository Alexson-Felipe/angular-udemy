import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // <- ele mostra para toda nossa aplicação, já está para qualquer um fazer injeção de dependencia.
})
export class FoodListService {
  public emitEvent = new EventEmitter();

  private list: Array<string> = ['X Bacon', 'Feijão', 'Ovo'];
  constructor() {}

  public foodList() {
    return this.list;
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
