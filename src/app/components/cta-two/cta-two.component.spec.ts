import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaTwoComponent } from './cta-two.component';

describe('CtaTwoComponent', () => {
  let component: CtaTwoComponent;
  let fixture: ComponentFixture<CtaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
