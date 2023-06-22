import { InstantiateExpr } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss'],
})
export class MainscreenComponent {
  isedit:boolean = false
  istrue: boolean = false;

  itemlist?: list[] = [];

  data?: list;

  submititems(food: string, cal: string, g: string) {
    if (!food) return;
    this.data = {
      food: food,
      calory: cal,
      weight: g,
    };

    if(this.isedit === false){
      this.itemlist?.push(this.data);
      this.istrue = !this.istrue;
    }
    else{
      console.log(this.editindex);
      this.itemlist![this.editindex] = this.data
      this.isedit = false
      this.istrue = false
    }

  }
  index!:number;
  delete(i: number) {
       this.index = i
    alert('Are You Sure');
    this.itemlist?.splice(i, 1);
  }
     editedvalue?:list;
     editindex!: number;

  edit(it: list,intex:number): void {
   this.istrue=true
   this.isedit = true
   this.editedvalue=it
   this.editindex = intex
  }

}

export interface list {
  food: string;
  calory: string;
  weight?: string;
}
