import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimcardListComponent } from './simcard-list.component';

describe('SimcardListComponent', () => {
  let component: SimcardListComponent;
  let fixture: ComponentFixture<SimcardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimcardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
