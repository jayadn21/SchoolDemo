import { userprofilemoduleMappingService } from './../../service/userprofilemodule-mapping.service';
import { Modules } from './../../shared/Models/modules';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserProfile } from './createuserprofile';
import { ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITreeOptions, IActionMapping } from 'angular-tree-component';
import { SubmodulesService } from 'src/app/service/submodules.service';
import { SubModule } from '../../shared/Models/submodule';
import { ArrayHelper } from 'src/app/shared/HelperClasses/ArrayHelper';
import { Institution } from './Institution';
import { UserprofileService } from 'src/app/service/userprofile.service';
import { UserProfileMapping } from 'src/app/shared/Models/userProfileMapping';

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.scss'],
  providers: [UserprofileService]
})
export class CreateUserProfileComponent implements OnInit, AfterViewInit {
  @ViewChild('tree') tree;

  InstitutionList: Institution[] = Array();
  selectedInstitutions = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownList = [];
  users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  data2 = [];
  selectedTreeList: string[];

  Buttontext = 'Create';
  Headingtext = 'Add Administrator';
  userprofiles: UserProfile[] = Array();

  profile = new UserProfile();

  data: Institution[] = Array();

  actionMapping: IActionMapping = {
    mouse: {
      click: (tree, node) => this.check(node, !node.data.checked)
    }
  };

  options: ITreeOptions = {
    displayField: 'SubModuleName',
    // isExpandedField: 'expanded',
    idField: 'Id',
    useCheckbox: false,
    actionMapping: this.actionMapping
  };

  arr1 = [
    { Id: 1, SubModuleName: 'hello1', ModuleId: 0, checked: false },
    { Id: 2, SubModuleName: 'hello2', ModuleId: 0, checked: true },
    { Id: 3, SubModuleName: 'hello3', ModuleId: 1, checked: false },
    { Id: 4, SubModuleName: 'hello4', ModuleId: 0, checked: true },
    { Id: 5, SubModuleName: 'hello5', ModuleId: 4, checked: false },
    { Id: 6, SubModuleName: 'hello6', ModuleId: 4, checked: true },
    { Id: 7, SubModuleName: 'hello7', ModuleId: 3, checked: false },
    { Id: 8, SubModuleName: 'hello8', ModuleId: 2, checked: true }
  ];

  defaultMappingArray = [];
  submodules: SubModule[] = Array();
  modules: Modules[] = Array();
  arrayHelper = new ArrayHelper();

  userProfilemapping = {
    UserProfileId: '',
    SubModuleIds: ''
  }

  userProfileMappings: UserProfileMapping[] = Array();

  constructor(private userprofileService: UserprofileService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private subModuleService: SubmodulesService,
    private userprofilemoduleMappingService: userprofilemoduleMappingService) { }

  ngOnInit() {
    this.getUserprofileDetails();
    this.getSubModules();
    this.dropdownSettings = {
      text: 'Select Sub-Divisions',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: 'myclass custom-class',
      primaryKey: 'Id',
      labelKey: 'Name',
      enableSearchFilter: false,
      searchBy: ['Name']
    };
  }

  ngAfterViewInit() {
    this.ExpandTree();
  }

  ExpandTree() {
    this.tree.treeModel.expandAll();
  }

  getSubModules() {
    this.subModuleService.getSubmodulesDetails()
      .subscribe(data => {
        if (data.success) {
          this.submodules = data.data[0];
          this.ResetTreeNodes();
        } else {
          this.toastr.error(data.message, 'Opps!');
        }

      });
  }

  ResetTreeNodes() {
    var arr3 = [];
    this.submodules.forEach((sm) =>
      arr3.push({
        Id: sm.Id, SubModuleName: sm.SubModuleName, ModuleId: sm.ModuleId, checked: false
      }));
    this.defaultMappingArray = this.arrayHelper.GetNestedChildren(arr3, 0);
    // var arr3 = this.arrayHelper.TreeToFlatArray(this.arr2, 0);
  }

  onSelect(event) {
    this.selectedTreeList = Object.entries(event.treeModel.selectedLeafNodeIds)
      .filter(([key, value]) => {
        return (value === true);
      }).map((node) => node[0]);
    console.log('selectedTreeList -> ' + this.selectedTreeList);
  }

  onDeselect(event) {
    this.onSelect(event);
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  onSearch(evt: any) {
    console.log(evt.target.value);
  }

  onsubmit() {

  }

  getUserprofileDetails() {
    console.log("Thus user profile");
    this.spinner.show();
    this.userprofileService.getUserprofileDetails()
      .subscribe(data => {
        if (data.success) {
          console.log('Success from UserProfile!!');
          this.userprofiles = data.data[0];
          console.log(this.userprofiles);
          this.spinner.hide();
        }
        else {
          this.toastr.error(data.message, "Opps!");
        }
      });

  }

  Saveuserprofile() {
    console.log("userprofile" + this.profile.Id);
    this.spinner.show();
    this.userprofileService.setUserprofileDetails(this.profile)
      .subscribe(data => {
        if (data.success) {
          this.spinner.hide();
          this.toastr.success('successfully' + this.Headingtext + '!', 'Success');
          console.log("New Profile Added")
          this.getUserprofileDetails();
          this.Cleardata();
        }
        else {
          this.toastr.error(data.message, 'server error!!');
        }
      });
  }

  Cleardata() {
    this.profile = new UserProfile();
    this.ClearUserProfileMapping();
    this.userProfileMappings = new Array();
  }

  ClearUserProfileMapping() {
    this.userProfilemapping.UserProfileId = '';
    this.userProfilemapping.SubModuleIds = '';
  }

  updateUserprofile() {
    this.spinner.show();
    console.log("User profile" + this.profile.ProfileName);
    this.Buttontext = 'Update';
    this.userprofileService.setUserprofileDetails(this.profile)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          this.toastr.success('Successfully ' + 'Updated User Profile!', 'Success');
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
      this.ClearUserProfileMapping();
      this.ResetTreeNodes();
      this.profile = event.data;
      this.userProfilemapping.UserProfileId = this.profile.Id.toString();
      this.Buttontext = 'Update';
      this.Headingtext = 'Update ';
      this.GetUserProfileMappingByProfileId(this.userProfilemapping.UserProfileId);
    }
  }

  GetUserProfileMappingByProfileId(profileId: string) {
    this.spinner.show();
    this.userProfilemapping.UserProfileId = profileId;
    this.userprofilemoduleMappingService.getUserprofileDetail(this.userProfilemapping)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          console.log(data.data[0]);
          this.userProfileMappings = data.data[0];
          this.UpdateProfileModuleTree();
          this.spinner.hide();
        }
        else {
          this.spinner.hide();
        }
      });
  }

  UpdateProfileModuleTree()
  {
    

    // this.userProfileMappings.forEach(p => {
    //   if (p.ModuleId != 0 && p.checked === true) {
    //     if (this.userProfilemapping.SubModuleIds === '') {
    //       this.userProfilemapping.SubModuleIds = p.Id;
    //     }
    //     else {
    //       this.userProfilemapping.SubModuleIds = this.userProfilemapping.SubModuleIds + ', ' + p.Id;
    //     }
    //   }
    // });
  }

  UpdateProfileModuleMappings() {
    this.ClearUserProfileMapping();
    this.userProfilemapping.UserProfileId = this.profile.Id.toString();
    console.log("UserProfileId.");
    console.log(this.userProfilemapping.UserProfileId);
    var arr3 = this.arrayHelper.TreeToFlatArray(this.defaultMappingArray, 0);
    // console.log("While updating the mapping.");
    // console.log(arr3[0]);
    arr3.forEach(p => {
      if (p.ModuleId != 0 && p.checked === true) {
        if (this.userProfilemapping.SubModuleIds === '') {
          this.userProfilemapping.SubModuleIds = p.Id;
        }
        else {
          this.userProfilemapping.SubModuleIds = this.userProfilemapping.SubModuleIds + ', ' + p.Id;
        }
      }
    });
    console.log("SubModuleIds.");
    console.log(this.userProfilemapping.SubModuleIds);
    this.userprofilemoduleMappingService.setuserprofilemodulemapping(this.userProfilemapping)
      .subscribe(data => {
        if (data.success) {
          console.log('Success!!');
          this.toastr.success('Successfully ' + 'Updated User Profile!', 'Success');
          this.spinner.hide();
          this.Cleardata();
        }
        else {
          this.toastr.error(data.message, "Opps!");
        }
      });
  }


  settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },

    add: {
      confirmCreate: true,
    },

    actions: {
      add: false,
      edit: false,
      delete: true,
      custom: [
        { name: 'editrecord', title: '<i class="fa fa-edit"></i>' },
      ],


    },

    columns: {
      // Id: {
      //   title: 'Id',
      // },
      ProfileName: {
        title: 'ProfileName',
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

  public check(node, checked) {
    this.updateChildNodeCheckbox(node, checked);
    this.updateParentNodeCheckbox(node.realParent);
    // var arr3 = this.arrayHelper.TreeToFlatArray(this.arr2, 0);
    // console.log(arr3);
  }
  public updateChildNodeCheckbox(node, checked) {
    console.log(node.data);
    node.data.checked = checked;
    if (node.children) {
      node.children.forEach((child) => this.updateChildNodeCheckbox(child, checked));
    }
  }
  public updateParentNodeCheckbox(node) {
    if (!node) {
      return;
    }

    let allChildrenChecked = true;
    let noChildChecked = true;

    for (const child of node.children) {
      if (!child.data.checked || child.data.indeterminate) {
        allChildrenChecked = false;
      }
      if (child.data.checked) {
        noChildChecked = false;
      }
    }

    if (allChildrenChecked) {
      node.data.checked = true;
      node.data.indeterminate = false;
    } else if (noChildChecked) {
      node.data.checked = false;
      node.data.indeterminate = false;
    } else {
      node.data.checked = true;
      node.data.indeterminate = true;
    }
    this.updateParentNodeCheckbox(node.parent);
  }

  OnTreeInit() {
    console.log('OnTreeInit ->');
    this.tree.treeModel.expandAll();
  }

}
