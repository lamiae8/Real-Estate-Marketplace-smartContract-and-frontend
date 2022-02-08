import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemsComponent } from './new-items.component';

describe('NewItemsComponent', () => {
  let component: NewItemsComponent;
  let fixture: ComponentFixture<NewItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
