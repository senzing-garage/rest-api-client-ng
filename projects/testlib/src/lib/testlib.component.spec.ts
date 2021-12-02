import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlibComponent } from './testlib.component';

describe('TestlibComponent', () => {
  let component: TestlibComponent;
  let fixture: ComponentFixture<TestlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestlibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
