export function Spinner() {
    return  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
       const oldFunction:Function = descriptor.value as Function;
       descriptor.value = async (...args:[])=>{
          const $this:Function= this;
          try{
            return await oldFunction.apply($this,args)
          }
          catch{
                //todo
          }
          finally{
            //todo
          }
       }
    };
  }