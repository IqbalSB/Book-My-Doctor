import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillstatusComponent } from './refillstatus.component';

describe('RefillstatusComponent', () => {
  let component: RefillstatusComponent;
  let fixture: ComponentFixture<RefillstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefillstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
