import { Component } from '@angular/core';
import { BService } from '../b.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
  providers:[BService]
})
export class AComponent {
  constructor(private b:BService){

  }
}
