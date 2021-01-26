import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluSearchMainComponent } from './plu-search-main.component';

describe('PluSearchMainComponent', () => {
  let component: PluSearchMainComponent;
  let fixture: ComponentFixture<PluSearchMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluSearchMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluSearchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
