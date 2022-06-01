import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaproductoComponent } from './recetaproducto.component';

describe('RecetaproductoComponent', () => {
  let component: RecetaproductoComponent;
  let fixture: ComponentFixture<RecetaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
