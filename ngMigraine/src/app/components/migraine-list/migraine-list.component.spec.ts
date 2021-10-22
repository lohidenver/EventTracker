import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigraineListComponent } from './migraine-list.component';

describe('MigraineListComponent', () => {
  let component: MigraineListComponent;
  let fixture: ComponentFixture<MigraineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigraineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigraineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
