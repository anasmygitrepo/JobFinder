import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtateJobComponent } from './crtate-job.component';

describe('CrtateJobComponent', () => {
  let component: CrtateJobComponent;
  let fixture: ComponentFixture<CrtateJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrtateJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrtateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
