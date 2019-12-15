import { Student } from './../../STUDENTS/students-database/student';
export class Attendance {
    Id: Number;
    Name: string;
    AcademicYearId: Number;
    CurrentClassSectionMediumId: Number;
    IsPresent: Boolean;
    IsHoliday: Boolean;
    AttendanceDate: string;

    constructor ( ) {
        this.IsPresent = true;
        this.IsHoliday = false;
    }
}