import { Component, Input} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StatisticRow} from './../partnerinfo-statistic.component'


@Component({
  selector: 'app-partnerstatistic-row',
  templateUrl: './partnerinfo-statistic--row.component.html',
  styleUrls: ['./partnerinfo-statistic--row.component.css']
})

export class PartnerinfoStatisticRowComponent {
  @Input() statisticRow: StatisticRow;
}
