import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentDialogComponent } from './delete-student-dialog.component';

describe('DeleteStudentDialogComponent', () => {
  let component: DeleteStudentDialogComponent;
  let fixture: ComponentFixture<DeleteStudentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteStudentDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteStudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
