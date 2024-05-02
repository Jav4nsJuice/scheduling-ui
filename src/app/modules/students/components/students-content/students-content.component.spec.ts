import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsContentComponent } from './students-content.component';

describe('StudentsContentComponent', () => {
  let component: StudentsContentComponent;
  let fixture: ComponentFixture<StudentsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
