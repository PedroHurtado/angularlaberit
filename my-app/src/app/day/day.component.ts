import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {
  @Input() day!:number
  //@Output() eventDay:EventEmitter<number> = new EventEmitter<number>()
  /*handlerClick(ev:Event){  
    ev.stopPropagation();
    this.eventDay.emit(this.day);
  }*/
}
