import { Component,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
interface dataType{
  name:string,id:number,indian:boolean,address:any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myThree';
  getData(){
    {
      const data:dataType={  // use of interface for data type checking 
        name:'anil singh',
        id:100,
        indian:true,address:"93,durgapura jaipur"
      }
      return data;
    }
  }
  constructor(private viewcontainer:ViewContainerRef,private cfr:ComponentFactoryResolver){
  }
 async loadAdmin(){
 this.viewcontainer.clear()
 const {AdminlistComponent} = await import('./components/adminlist/adminlist.component')  // lazy load component 
 this.viewcontainer.createComponent(this.cfr.resolveComponentFactory(AdminlistComponent))
  }
 async loadUser(){
  this.viewcontainer.clear()
  const {UserlistComponent} = await import('./components/userlist/userlist.component')
  this.viewcontainer.createComponent(this.cfr.resolveComponentFactory(UserlistComponent)) // lazy load component
  }
}
