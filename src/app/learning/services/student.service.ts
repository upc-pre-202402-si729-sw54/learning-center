import {Injectable} from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Student} from "../model/student.entity";

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService<Student> {
  constructor() {
    super();
    this.resourceEndPoint = '/students';
  }
}
