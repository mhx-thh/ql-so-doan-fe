import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

import { CitiesService } from "./city.service";
import { City } from './city.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy{

  cities:City[]=[];
  provinces=[];
  districts=[];
  wards=[];

  selectedProvince = "Tỉnh/Thành Phố";
  selectedDistrict = "Quận/Huyện";
  selectedWard = "Phường/Xã"


  provinces1=[];
  districts1=[];
  wards1=[];

  selectedProvince1 = "Tỉnh/Thành Phố";
  selectedDistrict1 = "Quận/Huyện";
  selectedWard1 = "Phường/Xã"


  products =[
    {discount:'30%',img:'../../assets/svg/grab-Logo_Small.svg',name:'Grab Express',price:'5.000',deliCount:'3.5'},
    {discount:'30%',img:'../../assets/svg/Safago/image 18.svg',name:'Giao hàng tiết kiệm',price:'6.000',deliCount:'5.5'},
    {discount:'30%',img:'../../assets/svg/Safago/image 16.svg',name:'LalaMove',price:'5.000',deliCount:'2.5'},
    {discount:'30%',img:'../../assets/svg/Safago/image 21.svg',name:'Viettel Post',price:'15.000',deliCount:'1.9'},
    {discount:'30%',img:'../../assets/svg/Safago/image 17.svg',name:'AhaMove',price:'5.000',deliCount:'1'},
    {discount:'30%',img:'../../assets/svg/Safago/image 20.svg',name:'Giao hàng nhanh',price:'20.000',deliCount:'1.2'},
    {discount:'30%',img:'../../assets/svg/Safago/image 109.svg',name:'VietNam Post',price:'5.000',deliCount:'2.1'},
    {discount:'30%',img:'../../assets/svg/Safago/image 110.svg',name:'Ship Chung',price:'5.000',deliCount:'3.1'},
  ];
  private citiesSub: Subscription;

  constructor(public citieService:CitiesService) { }

  ngOnInit() {
    this.citieService.getCities();
    this.citiesSub=this.citieService.getPostUpdateListener()
    .subscribe(
      (cities:City[]) => {
        this.cities = cities;
      }
      );
  }
  ngOnDestroy() {
    this.citiesSub.unsubscribe();
  }
  changeProvince(){
    this.provinces=[];

    for(let i=0;i<this.cities.length;i++) {
      this.provinces.push(this.cities[i].TinhThanh)
    }
    this.provinces = [...new Set(this.provinces)];
  }
  selectDistrict(id) {
    //getted from event
    this.districts=[];
    for(let i=0;i<this.cities.length;i++) {
      if(this.selectedProvince==this.cities[i].TinhThanh)
      this.districts.push(this.cities[i].QuanHuyen)
    }
    this.districts = [...new Set(this.districts)];
  }

  selectWard(id) {
    //getted from event
    this.wards=[];
    for(let i=0;i<this.cities.length;i++) {
      if(this.selectedDistrict==this.cities[i].QuanHuyen)
      this.wards.push(this.cities[i].PhuongXa)
    }
    this.wards = [...new Set(this.wards)];
  }

  changeProvince1(){
    this.provinces1=[];

    for(let i=0;i<this.cities.length;i++) {
      this.provinces1.push(this.cities[i].TinhThanh)
    }
    this.provinces1 = [...new Set(this.provinces1)];
  }
  selectDistrict1(id) {
    //getted from event
    this.districts1=[];
    for(let i=0;i<this.cities.length;i++) {
      if(this.selectedProvince1==this.cities[i].TinhThanh)
      this.districts1.push(this.cities[i].QuanHuyen)
    }
    this.districts1 = [...new Set(this.districts1)];
  }

  selectWard1(id) {
    //getted from event
    this.wards1=[];
    for(let i=0;i<this.cities.length;i++) {
      if(this.selectedDistrict1==this.cities[i].QuanHuyen)
      this.wards1.push(this.cities[i].PhuongXa)
    }
    this.wards1 = [...new Set(this.wards1)];
  }

}
