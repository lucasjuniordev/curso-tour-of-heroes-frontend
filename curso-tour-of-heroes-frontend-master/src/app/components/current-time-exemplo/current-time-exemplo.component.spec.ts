import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTimeExemploComponent } from './current-time-exemplo.component';

describe('CurrentTimeExemploComponent', () => {
  let component: CurrentTimeExemploComponent;
  let fixture: ComponentFixture<CurrentTimeExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTimeExemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTimeExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
