export class Employee {
    Id: number;
    EmailId: string;
    Name: string;
    PhoneNumber: number;
    AlternatePhoneNumber: number;
    PresentAddress: string;
    EmpCode: number;
    BloodGroup: string;
    InstitutionBranchId: number;
    ImagePath: string;
    AadharNumber: number;
    PanNumber: number;
    VoterId: string;
    PermanentAddress: string;
    Gender: string;
    JoiningDate: number;
    Qualification: string;
    InDuty:  string;
    TotalExperienceWhileJoining: string;
    RelievingDate: number;
    IsMarried: string;
    UserName: string;
    Nationality: string;
    MotherTounge: string;
    DateOfBirth: number;
    LoginAccess: boolean;
    Password: string;
    UserTypeId: number;
    constructor() {
        //By default set the Id to -1.
        this.Id = -1;
        this.Gender = "Male";
    }
}
