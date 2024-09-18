import {Injectable} from '@angular/core';
import {Enrollment} from "../model/enrollment.entity";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService extends BaseService<Enrollment> {
  constructor() {
    super();
    this.resourceEndPoint = '/students';
  }
}
