import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdrugComponent } from './searchdrug.component';

describe('SearchdrugComponent', () => {
  let component: SearchdrugComponent;
  let fixture: ComponentFixture<SearchdrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
