import { Component, EventEmitter, Input, Output } from '@angular/core';
import { list } from '../mainscreen/mainscreen.component';

@Component({
  selector: 'app-screenlist',
  templateUrl: './screenlist.component.html',
  styleUrls: ['./screenlist.component.scss'],
})
export class ScreenlistComponent {
  @Input() passlist?: list;
  @Output() objj?:any = new EventEmitter()
  @Output() change?:any = new EventEmitter()

  delete(){
    this.objj.emit()
  }
  edit(){
     this.change.emit()
  }
}
