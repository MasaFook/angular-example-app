import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackComponent } from './feedback.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark phone invalid when its value is less than 10 charecters', () =>{
    const ctrl = component.fbForm.get('phone');
    //testi arvon asetus
    ctrl?.setValue('123456')
    fixture.detectChanges();
    //testaus
    expect(ctrl?.invalid).toBeTruthy();
  });

  it('should mark phone valid when its value is 10 charecters', () =>{
    const ctrl = component.fbForm.get('phone');
    //testi arvon asetus
    ctrl?.setValue('1234567890');
    fixture.detectChanges();
    //testaus
    expect(ctrl?.valid).toBeTruthy();
  });

  it('submit btn is disabled when form is invalid', () =>{
    const instance = fixture.debugElement.nativeElement;
    // valitaan btn id:n avulla
    const button = instance.querySelector('#submitbtn');
    expect(button.disabled).toBeTruthy();
  });

  it('should enable submit btn when form is valid', () =>{
    const instance = fixture.debugElement.nativeElement;
    let ctrl = component.fbForm.get('title');
    ctrl?.setValue('test');
    ctrl = component.fbForm.get('description');
    ctrl?.setValue('test');
    ctrl = component.fbForm.get('name');
    ctrl?.setValue('test');
    ctrl = component.fbForm.get('email');
    ctrl?.setValue('test@test.com');
    ctrl = component.fbForm.get('phone');
    ctrl?.setValue('1234567890');
    fixture.detectChanges();
    const button = instance.querySelector('#submitbtn');
    expect(button.disabled).toBeFalsy();
  });
});
