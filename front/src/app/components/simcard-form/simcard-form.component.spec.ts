import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimcardFormComponent } from './simcard-form.component';

describe('SimcardFormComponent', () => {
  let component: SimcardFormComponent;
  let fixture: ComponentFixture<SimcardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimcardFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimcardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
