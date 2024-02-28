import { Component, HostListener } from '@angular/core';
import { DayComponent } from '../day/day.component';

function* getDays(){
  for(let i=0;i<31;i++){
    yield i+1
  }
}

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  days=[...getDays()]  
  @HostListener('click',["$event"])
  handlerDay(ev:Event){
    ev.stopPropagation();
    const node = (ev.   composedPath() as HTMLElement[])
          .find(n=>n.dataset && 'index' in n.dataset)
    if(node){
      const {index} = node.dataset;
      console.log(this.days[Number(index)])
    }
  }
}
