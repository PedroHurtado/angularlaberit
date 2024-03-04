import { Injectable } from '@angular/core';
import { CService } from './c.service';

@Injectable({
  providedIn: 'root'
})
export class BService {

  constructor(private cService:CService) { 
    console.log("Servicio B")
  }
}
