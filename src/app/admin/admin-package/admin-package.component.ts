import { Component} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-adminpackage',
  templateUrl: './admin-package.component.html',
  styleUrls: ['./admin-package.component.css']
})

export class AdminPackageComponent {
  packages: Package[] = [
    {Name: 'Gói người dùng 1', Content:'Giảm giá 20% khi đặt đơn hàng', Valid:'1 năm', Price:'1.000.000'},
    {Name: 'Gói người dùng 2', Content:'Giảm giá 50% khi đặt đơn hàng', Valid:'1 năm', Price:'2.000.000'},
  ]
}


export class Package{
  Name: string;
  Content: string;
  Valid: string;
  Price: string;
}
