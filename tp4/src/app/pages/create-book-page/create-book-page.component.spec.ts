import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookPageComponent } from './create-book-page.component';

describe('CreateBookPageComponent', () => {
  let component: CreateBookPageComponent;
  let fixture: ComponentFixture<CreateBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBookPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
