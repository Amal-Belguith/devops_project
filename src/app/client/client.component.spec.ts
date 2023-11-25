import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLIENTComponent } from './client.component';

describe('CLIENTComponent', () => {
  let component: CLIENTComponent;
  let fixture: ComponentFixture<CLIENTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CLIENTComponent]
    });
    fixture = TestBed.createComponent(CLIENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
