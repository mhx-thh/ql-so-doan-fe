import { Component, Input} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ManageRow} from './../partnerinfo-manage.component'


@Component({
  selector: 'app-partnermanage-row',
  templateUrl: './partnerinfo-manage--row.component.html',
  styleUrls: ['./partnerinfo-manage--row.component.css']
})

export class PartnerinfoManageRowComponent {
  @Input() manageRow: ManageRow;
}
