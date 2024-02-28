import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GridComponent,    
    CounterComponent,
    TimerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = undefined;
  data = [1,2,3,4,5,6]
  handlerClick(ev:Event){
    ev.stopPropagation();
    this.data.push(this.data.length+1)
  }
}
