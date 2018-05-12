import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadoresListComponent } from './trabajadores-list.component';

describe('TrabajadoresListComponent', () => {
  let component: TrabajadoresListComponent;
  let fixture: ComponentFixture<TrabajadoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajadoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
