import { Component, Inject } from '@angular/core';
import { CreateService } from '../create.service';
import { HttpClient } from '@angular/common/http';
import { URL } from '../app.config';
import { CreateUrl } from '../util';
import { Spinner } from '../spinner';

export interface ISpinner{
  on():void;
  off():void;
}

const PATH = '/customer'

interface Request {
  id: number,
  name: string,
  phone: string
}

const service = (path: string) => {
  return (http: HttpClient, url: URL) => {
    return new CreateService<Request>(http, CreateUrl(url, path))
  }
}


@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  providers: [
    {
      provide: CreateService<Request>,
      useFactory: service(PATH),
      deps: [HttpClient, URL]
    },

  ]
})
export class CustomerComponent implements ISpinner {
  constructor(private service: CreateService<Request>) {
    this.create();

    //await this.service.create({})
  }
  on(): void {
    console.log("on");
  }
  off(): void {
    console.log("off")
  }


  @Spinner()
  private async create() {
    const result = await this.service.create({ id: 1, name: "pedro hurtado", phone: "666789999" })
  }
}
