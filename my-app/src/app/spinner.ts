export function Spinner() {
    return  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
       const oldFunction:Function = descriptor.value as Function;
       descriptor.value = async function (...args:[]){          
          console.log(this)
          try{
            return await oldFunction.apply(this,args)
          }
          catch{
                console.log("error")
          }
          finally{
                console.log("finally")
          }
       }
    };
  }