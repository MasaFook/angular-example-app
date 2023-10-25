import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render feedback button', () => {
    component = fixture.debugElement.componentInstance;
    spyOn(component, 'showFeedbackPage')
    fixture.detectChanges();
    const instance = fixture.debugElement.nativeElement;
    // valitaan btn id:n avulla
    const button = instance.querySelector('#feedbackbtn');
    // testataan että btn:ssa on teksti ja todetaan että on renderöitynyt
    expect(button.textContent).toContain('Feedback page');
  });
});
