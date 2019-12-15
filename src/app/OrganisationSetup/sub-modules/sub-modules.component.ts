import { ModuleService } from './../../service/module.service';
import { ToastrService } from 'ngx-toastr';
import { SubmodulesService } from './../../service/submodules.service';
import { Component, OnInit } from '@angular/core';
import { SubModule } from '../../shared/Models/submodule';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sub-modules',
  templateUrl: './sub-modules.component.html',
  styleUrls: ['./sub-modules.component.scss'],
  providers: [SubmodulesService, ModuleService]
})
export class SubModulesComponent implements OnInit {

  submodulesForList = [];
  submodulesForGrid: SubModule[] = Array();
  newsubmodule = new SubModule();
  moduleList: SubModule[] = Array();
  buttonText:string = "Create";
  pageTitle:string = "Create New Sub Module";

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _submoduleservice: SubmodulesService) { }

  ngOnInit() {
    this.getSubmodulesDetails();
    this.getSubmodulesForGrid();
  }

  getSubmodulesDetails() {
    this.spinner.show();
    this._submoduleservice.getSubmodulesDetails()
      .subscribe(data => {
        if (data.success) {
          console.log('sub module success');
          this.submodulesForList = data.data[0];
          this.moduleList = this.submodulesForList.filter(sm => sm.ModuleId === 0);
          console.log('this.moduleList' + this.moduleList);
          this.spinner.hide();
        }
        else {
          this.toastr.error(data.message, "Opps!");
        }
      });
  }

  getSubmodulesForGrid() {
    console.log();
    this.spinner.show();
    this._submoduleservice.getSubModulesForGrid()
      .subscribe(data => {
        if (data.success) {
          console.log('sub module success');
          this.submodulesForGrid = data.data[0];
          this.spinner.hide();
        }
        else {
          this.toastr.error(data.message, "Opps!");
        }
      });
  }

  onCustomAction(event) {
    console.log(event.data);
    if (event.action === 'editrecord') {
      this.newsubmodule = event.data;
      this.buttonText = 'Update';
      this.pageTitle = 'Update Module';

    }

  }
  updatesubmodule() {
    if(this.newsubmodule.ModuleId === -1)
    {
      this.toastr.error("Please select a valid Module.", 'Opps!');
    }
    else
    {
    this._submoduleservice.setSubmoduleDetails(this.newsubmodule)
      .subscribe(data => {
        if (data.success) {
          this.clearForm();
          this.getSubmodulesForGrid();
          this.getSubmodulesDetails();
          this.toastr.success('Successfully ' + this.buttonText + 'd Module!', 'Success');
        }
        else
        this.toastr.error(data.message, 'Opps!');
      });
    }
  }

  clearForm() {
    this.newsubmodule = new SubModule();
  }

  settings = {

    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
      ],


    },

    columns: {
      ModuleName: {
        title: 'Module Name',
      },
      SubModuleName: {
        title: 'Sub Module',
      },
    },
  };




  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    console.log("Create Event In Console")
    console.log(event);

  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
  }


}
