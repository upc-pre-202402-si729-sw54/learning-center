export class Student {
  acmeStudentRecordId: string;
  profileId: number;
  totalCompleteCourses: number;
  totalTutorials: number;

  constructor(student: {
    acmeStudentRecordId?: string,
    profileId?: number,
    totalCompleteCourses?: number,
    totalTutorials?: number
  }) {
    this.acmeStudentRecordId = student.acmeStudentRecordId || '';
    this.profileId = student.profileId || 0;
    this.totalCompleteCourses = student.totalCompleteCourses || 0;
    this.totalTutorials = student.totalTutorials || 0;
  }
}
