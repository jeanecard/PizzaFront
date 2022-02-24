import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailleEtBaseComponent } from './taille-et-base.component';

describe('TailleEtBaseComponent', () => {
  let component: TailleEtBaseComponent;
  let fixture: ComponentFixture<TailleEtBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailleEtBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailleEtBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
