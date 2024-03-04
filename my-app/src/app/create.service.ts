import { HttpClient } from '@angular/common/http';


export class CreateService<T> {
  constructor(private http: HttpClient,private url:string) {
    console.log(this.url);
  }
  create(entity: T) {
    //this.http.post<T>(this.url,entity);
    console.log(entity)
  }
}
