import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCreateAndEditComponent } from './course-create-and-edit.component';

describe('CourseCreateAndEditComponent', () => {
  let component: CourseCreateAndEditComponent;
  let fixture: ComponentFixture<CourseCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCreateAndEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
