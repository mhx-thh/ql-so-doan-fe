import { Component} from '@angular/core' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-partnerstatistic',
  templateUrl: './partnerinfo-statistic.component.html',
  styleUrls: ['./partnerinfo-statistic.component.css']
})

export class PartnerinfoStatisticComponent {
  items = [1,2,3,4]
  statisticRows: StatisticRow[] = [
    {Date: '1/1/2021', Count:'27', Rate:'80%', Earn:'1.500.000đ'},
    {Date: '2/1/2021', Count:'20', Rate:'90%', Earn:'2.500.000đ'},
    {Date: '3/1/2021', Count:'37', Rate:'83%', Earn:'1.300.000đ'},
    {Date: '4/1/2021', Count:'33', Rate:'82%', Earn:'1.200.000đ'},
    {Date: '5/1/2021', Count:'40', Rate:'75%', Earn:'2.100.000đ'},
  ]
}


export class StatisticRow {
  Date: string;
  Count: string;
  Rate: string;
  Earn: string;
}
