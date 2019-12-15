import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent {
  data: any;

constructor(private _auth: AuthService, private _router: Router, private toastr: ToastrService) {}

 user = {
    UserName: '',
    Password: '',
  };

  aboutme = {
    UserName: '',
    Id: '',
    EmailId: '',
    UserTypeId: '',
    Address:'',
    LastLogin:'',
    PhoneNumber: '',
    CreatedDate: '',
    InstitutionGroupId: '',
  }

  InstitutionGroupId = '';

  loginUser() {
  this._auth.loginUser(this.user)
                .subscribe(data => {
                  if (data.success)  {
                      localStorage.setItem('user', JSON.stringify(this.user.UserName));
                      localStorage.setItem('id_token', JSON.stringify(data.token));
                      localStorage.setItem('UserName', JSON.stringify(this.user.UserName));
                      localStorage.setItem('RoleTypeId', JSON.stringify(data.data[0].RoleTypeId));
                      localStorage.setItem('InstitutionGroupId', JSON.stringify(data.data[0].InstitutionGroupId));
                      console.log(data.data[0].InstitutionId);
                      localStorage.setItem('InstitutionId', JSON.stringify(data.data[0].InstitutionId))
                      localStorage.setItem('EmailId', JSON.stringify(data.data[0].EmailId));
                      localStorage.setItem('Id', JSON.stringify(data.data[0].Id));
                      this.toastr.success("Redirecting....", "Authentication Success!" , {
                        timeOut: 500
                      });
                      this._router.navigate(['dashboard/default']);
                    }
                    else {
                      this.toastr.error("Invalid username or password", "Authentication Failed!" , {
                        timeOut: 1000
                      });
                    }
                  });
  }
}
