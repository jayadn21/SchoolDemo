import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  private route = '/Diary';
private _getDiarys = this.route + '/getdiarys';
private _getDiary = this.route + '/getdiary';
private _setDiary = this.route + '/setdiary';
private _delDiary = this.route + '/deldiary';

  constructor(private serviceUitility: ServiceUitility) { }

  getDiarysDetails(){
    return this.serviceUitility.postRequest(this._getDiarys,'');
  }

  getDiaryDetails(){
    return this.serviceUitility.postRequest(this._getDiary,'');
  }

  setDiaryDetails(obj){
    return this.serviceUitility.postRequest(this._setDiary, obj);
  }
  delDiaryDetails(obj){
    return this.serviceUitility.postRequest(this._delDiary, obj);
  }

  }
