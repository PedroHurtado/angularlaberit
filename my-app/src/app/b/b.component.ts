import { Component } from '@angular/core';
import { BService } from '../b.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css',
  providers:[BService]
})
export class BComponent {
  constructor(private b:BService){

  }
}
