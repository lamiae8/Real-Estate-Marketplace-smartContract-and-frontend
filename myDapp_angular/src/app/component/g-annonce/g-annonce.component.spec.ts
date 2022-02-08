import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GAnnonceComponent } from './g-annonce.component';

describe('GAnnonceComponent', () => {
  let component: GAnnonceComponent;
  let fixture: ComponentFixture<GAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
