export class Course {
  id: number;
  title: string;
  description: string;

  constructor(course: { id?: number, title?: string, description?: string }) {
    this.id = course.id || 0;
    this.title = course.title || '';
    this.description = course.description || '';
  }
}
