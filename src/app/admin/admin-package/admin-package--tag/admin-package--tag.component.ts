import { Component, Input} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Package} from './../admin-package.component'

@Component({
  selector: 'app-adminpackage--tag',
  templateUrl: './admin-package--tag.component.html',
  styleUrls: ['./admin-package--tag.component.css']
})

export class AdminPackageTagComponent {
  @Input() package: Package;
}
