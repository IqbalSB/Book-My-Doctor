import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdrugidComponent } from './searchdrugid.component';

describe('SearchdrugidComponent', () => {
  let component: SearchdrugidComponent;
  let fixture: ComponentFixture<SearchdrugidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdrugidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdrugidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
