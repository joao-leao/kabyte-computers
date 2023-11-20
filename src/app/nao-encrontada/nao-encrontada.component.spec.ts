import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncrontadaComponent } from './nao-encrontada.component';

describe('NaoEncrontadaComponent', () => {
  let component: NaoEncrontadaComponent;
  let fixture: ComponentFixture<NaoEncrontadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaoEncrontadaComponent]
    });
    fixture = TestBed.createComponent(NaoEncrontadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
