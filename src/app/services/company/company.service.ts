import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  private _URL: string = "http://localhost:8080/CouponsWeb2018/rest/CompanyService/";
  private _COUPON_URL: string = "coupon/";

  constructor(private http: HttpClient) { }


  public createCoupon(coupon): Observable<any> {
    return this.http.post(this._URL + this._COUPON_URL, coupon);
  }

  public updateCoupon(coupon): Observable<any> {
    return this.http.put(this._URL + this._COUPON_URL, coupon);
  }

  public removeCoupon(id): Observable<any> {
    return this.http.delete(this._URL + this._COUPON_URL + id);
  }

  public getCoupons(): Observable<any> {
    return this.http.get(this._URL + this._COUPON_URL);
  }

  public getCouponById(id): Observable<any> {
    return this.http.get(this._URL + this._COUPON_URL + id);
  }

  public getCouponByType(type): Observable<any> {
    return this.http.get(this._URL + "couponByType" + type);
  }

  public getCouponUpToDate(date: Date): Observable<any> {
    return this.http.get(this._URL + "couponUpToDate?date=" + date.getMilliseconds());
  }

  public getCouponUpToPrice(price: number): Observable<any> {
    return this.http.get(this._URL + "couponUpToPrice?price=" + price);
  }
}
