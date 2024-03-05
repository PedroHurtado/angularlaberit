import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';


export class CreateService<T> {
  constructor(private http: HttpClient,private url:string) {
    console.log(this.url);
  }
  create(entity: any):Promise<T> {
    return lastValueFrom(this.http.post<T>(this.url,entity));    
  }
}
