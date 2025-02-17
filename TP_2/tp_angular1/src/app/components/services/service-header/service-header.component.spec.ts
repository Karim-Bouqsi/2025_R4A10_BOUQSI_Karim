import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHeaderComponent } from './service-header.component';

describe('ServiceHeaderComponent', () => {
  let component: ServiceHeaderComponent;
  let fixture: ComponentFixture<ServiceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
