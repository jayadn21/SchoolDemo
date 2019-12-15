import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EventTypeService } from 'src/app/service/event-type.service';
import {ColorPickerService, Rgba} from 'ngx-color-picker';
import { EventType } from 'src/app/shared/Models/EventType';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.scss']
})
export class EventTypeComponent implements OnInit {
  constructor(private _eventType: EventTypeService, public cpService: ColorPickerService,
    private spinner: NgxSpinnerService, private toastr: ToastrService) {
   }

   Buttontext = 'Create';
   Headingtext = 'Create Event Type';
   ColorPicker = '';
   eventType: EventType [] = Array();
   Eventtype = new EventType();


  ngOnInit() {
    this. getEventTypes();
  }

  getEventTypes() {
    console.log('Event Type');
    this.spinner.show();
    this._eventType.getEventTypes()
    .subscribe(data => {
      if (data.success) {
        console.log('Success from Accounting year!!');
        this.eventType = data.data[0];
        console.log(this.eventType);
        this.spinner.hide();
      } else {
        this.toastr.error(data.message, 'Opps!');
      }
      });
  }
  saveEventType() {
    console.log('EventType' + this.Eventtype.Id);
    this.spinner.show();
    this._eventType.setEventType(this.Eventtype)
    .subscribe(data => {
      if  (data.success) {
      this.spinner.hide();
      this.toastr.success('Successfully ' + this.Buttontext + 'd!', 'Success');
      this.getEventTypes();
      this.cleardata();
      } else {
        this.toastr.error(data.message, 'server error!!');
      }
    });
  }

  onEdit(event) {
    console.log(event);
    // if (event.action === 'editrecord') {
      this.Eventtype = event;
      this.Buttontext = 'Update';
      this.Headingtext = 'Update Event Type';
    // }
  }

  cleardata() {
    this.Eventtype = new EventType;
    this.Buttontext = 'Create';
    this.Headingtext = 'Create Event Type';
 }

  ColorPick() {
    this.ColorPicker = 'ColorPicker';
  }

  onDeleteConfirm(event) {
    console.log('Delete Event In Console');
    console.log(event);
    this.Eventtype = event;
    if (window.confirm('Are you sure you want to delete?')) {
      console.log('EventType' + this.Eventtype.Id);
      this.spinner.show();
      this._eventType.delEventType(this.Eventtype)
      .subscribe(data => {
        if  (data.success) {
        this.spinner.hide();
        this.toastr.success('Successfully deleted!', 'Success');
        this.getEventTypes();
        this.cleardata();
        } else {
          this.toastr.error(data.message, 'server error!!');
        }
      });
    }
  }
}
