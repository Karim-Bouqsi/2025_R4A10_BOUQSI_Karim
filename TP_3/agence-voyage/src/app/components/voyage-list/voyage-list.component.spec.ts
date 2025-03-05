import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageListComponent } from './voyage-list.component';

describe('VoyageListComponent', () => {
  let component: VoyageListComponent;
  let fixture: ComponentFixture<VoyageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
