import { Injectable } from '@angular/core';
interface dataType{
  name:string,id:number,indian:boolean,address:any
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData(){
    {
      const data:dataType={  // use of interface for data type checking model and interface 
        name:'anil singh',
        id:100,
        indian:true,address:"93,durgapura jaipur"
      }
      return data;
    }
  }
}
