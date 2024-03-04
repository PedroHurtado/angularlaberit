import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateService<T> {

     create(entity:T){
      console.log(entity)
     }
}
