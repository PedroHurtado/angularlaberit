import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CService {

  constructor() { 
    console.log("Servicio C")
  }
}
