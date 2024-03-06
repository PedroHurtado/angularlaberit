import {ISpinner} from './customer/customer.component'
export function Spinner() {
    return  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
       const oldFunction:Function = descriptor.value as Function;
       descriptor.value = async function (...args:[]){
          const spinner:ISpinner = this as ISpinner;
          try{
            spinner.on();
            return await oldFunction.apply(this,args)
          }
          catch{
                console.log("error")
          }
          finally{
                console.log("finally")
                spinner.off();
          }
       }
    };
  }
