import { Component} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Package} from './../../admin/admin-package/admin-package.component'

@Component({
  selector: 'app-userservice',
  templateUrl: './userinfo-service.component.html',
  styleUrls: ['./userinfo-service.component.css']
})

export class UserinfoServiceComponent {
  packages: Package[] = [
    {Name: 'Gói người dùng 1', Content:'Giảm giá 20% khi đặt đơn hàng', Valid:'1 năm', Price:'1.000.000'},
    {Name: 'Gói người dùng 2', Content:'Giảm giá 50% khi đặt đơn hàng', Valid:'1 năm', Price:'2.000.000'},
  ]
}
