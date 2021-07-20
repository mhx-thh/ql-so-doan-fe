import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject } from 'rxjs';
import { map  } from 'rxjs/operators';
import {Router} from '@angular/router'
import {City} from './city.model';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + "/city/";

@Injectable({providedIn: 'root'})
export class CitiesService {
  public citys: City[] = [];
  public citiesUpdated = new Subject<City[]>();

  constructor(private http:HttpClient , private router: Router) {}

  getCities() {
    this.http.get<{message: string, cities: any}>(BACKEND_URL)
      .pipe(map((cityData) => {
        return cityData.cities.map(city => {
          return {
          _id : city._id,
          TinhThanh : city.TinhThanh,
          QuanHuyen : city.QuanHuyen,
          PhuongXa: city.PhuongXa
          }
        });
      }))
      .subscribe((transformedPosts) => {
        this.citys = transformedPosts;
        this.citiesUpdated.next([...this.citys]);
      }) ;
  }
  getPostUpdateListener() {
    return this.citiesUpdated.asObservable();
  }

}
