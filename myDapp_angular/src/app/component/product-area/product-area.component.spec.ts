import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAreaComponent } from './product-area.component';

describe('ProductAreaComponent', () => {
  let component: ProductAreaComponent;
  let fixture: ComponentFixture<ProductAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
