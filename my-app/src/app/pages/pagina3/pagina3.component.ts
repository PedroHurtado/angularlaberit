import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [],
  templateUrl: './pagina3.component.html',
  styleUrl: './pagina3.component.css'
})
export class Pagina3Component {
  constructor(route:ActivatedRoute){
    console.log(route.snapshot.queryParams)
  }
}
