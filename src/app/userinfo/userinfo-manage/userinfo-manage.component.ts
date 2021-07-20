import { Component, Input} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-usermanage',
  templateUrl: './userinfo-manage.component.html',
  styleUrls: ['./userinfo-manage.component.css']
})



export class UserinfoManageComponent {
  manageRows: ManageRow[] = [
    {ID:'000000001',Date:'5/4/2021',Descrip:'Báo cáo',Partner:'Lalamove',Fee:'30.000đ',Status:'Đang vận chuyển'},
    {ID:'000000002',Date:'4/4/2021',Descrip:'Giấy tờ',Partner:'GHTK',Fee:'50.000đ',Status:'Đang vận chuyển'},
    {ID:'000000003',Date:'3/4/2021',Descrip:'Báo cáo',Partner:'Viettel',Fee:'40.000đ',Status:'Đang vận chuyển'},
    {ID:'000000004',Date:'2/4/2021',Descrip:'Gì đó',Partner:'GrabExpress',Fee:'20.000đ',Status:'Đang vận chuyển'},
    {ID:'000000005',Date:'1/4/2021',Descrip:'Không biết',Partner:'Lalamove',Fee:'60.000đ',Status:'Đang vận chuyển'},
  ]
}

export class ManageRow {
  ID: string;
  Date: string;
  Descrip: string;
  Partner: string;
  Fee: string;
  Status: string;
  constructor(iD: string,
    date: string,
    descrip: string,
    partner: string,
    fee: string,
    status: string){
      this.ID = iD;
      this.Date = date;
      this.Descrip = descrip;
      this.Partner = partner;
      this.Fee = fee;
      this.Status = status; 
  }
}