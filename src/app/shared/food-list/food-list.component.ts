import { FoodList } from './../../module/food-list';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

//Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      //subscribe se increva e fica escutando
      next: (res) => (this.foodList = res),
      error: (error) => error,
    });
    //
    this.foodListService.emitEvent.subscribe((res) => {
      alert(`Olha você add => ${res.nome}`);
      return this.foodList.push(res);
    });
  }

  foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe({
      next: (res: FoodList) => {
        this.foodList = this.foodList.filter((item) => {
          return id !== item.id;
        });
      },
      error: (error: any) => error,
    });
  }

  foodListEdit(nome: string, id: number) {
    this.foodListService.foodListEdit(nome, id).subscribe({
      next: (res: FoodList) => {},
      error: (error: any) => error,
    });
  }
}
