import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBanqueComponent } from './update-banque.component';

describe('UpdateBanqueComponent', () => {
  let component: UpdateBanqueComponent;
  let fixture: ComponentFixture<UpdateBanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBanqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
