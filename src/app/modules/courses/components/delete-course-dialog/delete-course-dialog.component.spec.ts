import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourseDialogComponent } from './delete-course-dialog.component';

describe('DeleteCourseDialogComponent', () => {
  let component: DeleteCourseDialogComponent;
  let fixture: ComponentFixture<DeleteCourseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCourseDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCourseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
