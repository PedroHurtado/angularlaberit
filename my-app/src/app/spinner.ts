export function Spinner() {
    return  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
       const oldFunction:Function = descriptor.value as Function;
       descriptor.value = async (...args:[])=>{          
          try{
            return await oldFunction.apply(target,args)
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