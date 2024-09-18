export class Enrollment {
  enrollmentId: number;
  studentRecordId: string;
  courseId: number;
  status: string;

  constructor(enrollment: {
    enrollmentId?: number,
    studentRecordId?: string,
    courseId?: number,
    status?: string,
  }) {
    this.enrollmentId = enrollment.enrollmentId || 0;
    this.studentRecordId = enrollment.studentRecordId || '';
    this.courseId = enrollment.courseId || 0;
    this.status = enrollment.status || '';
  }


}
