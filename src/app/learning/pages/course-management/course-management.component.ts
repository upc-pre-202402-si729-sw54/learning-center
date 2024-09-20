import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {Course} from "../../model/course.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {CourseService} from "../../services/course.service";
import {CourseCreateAndEditComponent} from "../../components/course-create-and-edit/course-create-and-edit.component";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-course-management',
  standalone: true,
  imports: [
    CourseCreateAndEditComponent,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatSortHeader,
    MatIcon,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    NgClass,
    MatRow,
    MatPaginator
  ],
  templateUrl: './course-management.component.html',
  styleUrl: './course-management.component.css'
})
export class CourseManagementComponent implements OnInit, AfterViewInit {

  protected courseData!: Course;
  protected columnsToDisplay: string[] = ['id', 'title', 'description', 'actions'];

  @ViewChild(MatPaginator, {static: false})
  protected myPaginator!: MatPaginator;

  @ViewChild(MatSort, {static: false})
  protected mySort!: MatSort;

  protected isEditMode: boolean = false;
  protected dataSource!: MatTableDataSource<any>;

  private courseService: CourseService = inject(CourseService);

  constructor() {
    this.isEditMode = false;
    this.courseData = new Course({});
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getAllCourses();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.myPaginator;
    this.dataSource.sort = this.mySort;
  }

  private getAllCourses() {
    this.courseService.getAll().subscribe((response: Array<Course>) => {
      this.dataSource.data = response;
    });
  }

  private resetEditState(): void {
    this.courseData = new Course({});
    this.isEditMode = false;
  }

  onCancelEdit() {
    this.resetEditState();
    this.getAllCourses();
  }

  onCourseAdded(course: Course) {
    this.courseData = course;
    this.createCourse();
    this.resetEditState();
  }

  createCourse() {
    this.courseService.create(this.courseData).subscribe((response: Course) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    });
  }

  onCourseUpdated(course: Course) {
    this.courseData = course;
    this.updateCourse();
    this.resetEditState();
  }

  updateCourse() {
    let courseToUpdate = this.courseData;
    this.courseService.update(courseToUpdate.id, courseToUpdate).subscribe((response: Course) => {
      let index = this.dataSource.data.findIndex((course: Course) => course.id === response.id);
      this.dataSource.data[index] = response;
      this.dataSource.data = this.dataSource.data;
    });
  }

  onEditItem(course: Course) {
    this.isEditMode = true;
    this.courseData = course;
  }

  onDeleteItem(course: Course) {
    this.deleteCourse(course);
  }

  deleteCourse(course: Course) {
    this.courseService.delete(course.id).subscribe((e) => {
      this.dataSource.data = this.dataSource.data.filter((_course: Course) => _course.id !== course.id);
    })
  }
}
