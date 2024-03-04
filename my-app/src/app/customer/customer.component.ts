import { Component, Inject } from '@angular/core';
import { CreateService } from '../create.service';

const PATH = '/customer'

interface Request{
  id:number,
  name:string,
  phone:string
}

const service = (path:string)=>{
   return ()=>new CreateService<Request>()
}


@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  providers:[
    {provide:CreateService<Request>, useFactory:service(PATH)}
  ]
})
export class CustomerComponent {
  constructor(private service:CreateService<Request> ){
    this.service.create({id:1,name:"pedro hurtado", phone:"666789999"})
  }
}
