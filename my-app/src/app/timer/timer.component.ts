import { Component, signal, effect } from '@angular/core';



@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
    time=signal(this.formatDate())

    constructor(){
      
     effect((onCleanup)=>{
        const handle= setInterval(()=>this.time.set(this.formatDate()),1000)
        onCleanup(() => {
          clearInterval(handle)
        });
      })
      

    }
    private getDate(){
      return new Date();
    }
    private formatDate(){
      const date = this.getDate();
      let options:Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return new Intl.DateTimeFormat('es-ES', options).format(date);
    }
}


