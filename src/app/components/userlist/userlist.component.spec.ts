import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistComponent } from './userlist.component';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("check Component name ",()=>{
    expect(component.componentName).toBe("user")
  })
  it("check Component function",()=>{
    expect(component.sum()).toBe(100)               //Component Test case Angular automated function testing
  }) 
  it("check Component HTML",()=>{
    const collect = fixture.nativeElement
    expect(collect.querySelector(".user_component").textContent).toContain("Head")      
    //Component Test case Angular automated HTML ELEMENT
  }) 
});
