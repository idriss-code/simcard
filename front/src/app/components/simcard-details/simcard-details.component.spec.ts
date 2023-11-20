import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimcardDetailsComponent } from './simcard-details.component';

describe('SimcardDetailsComponent', () => {
  let component: SimcardDetailsComponent;
  let fixture: ComponentFixture<SimcardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimcardDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimcardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
