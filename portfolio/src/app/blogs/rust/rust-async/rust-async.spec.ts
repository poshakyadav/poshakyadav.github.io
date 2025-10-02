import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustAsync } from './rust-async';

describe('RustAsync', () => {
  let component: RustAsync;
  let fixture: ComponentFixture<RustAsync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RustAsync]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RustAsync);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
