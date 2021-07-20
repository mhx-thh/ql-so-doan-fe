import { Component, Input} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ManageRow} from './../userinfo-manage.component'


@Component({
  selector: 'app-usermanage-row',
  templateUrl: './userinfo-manage--row.component.html',
  styleUrls: ['./userinfo-manage--row.component.css']
})

export class UserinfoManageRowComponent {

  @Input() manageRow: ManageRow;
}
