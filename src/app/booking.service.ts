import { Injectable } from '@angular/core';
// import { HttpClient }from '@angular/common/http';

// export interface Appointment{
//   id: string;
//   name: string;
//   email: string;
//   phone_num: string;
//   date: Date;
//   slot: string;
//   haircut_name: string;
//   stylist_name: string;
// }


@Injectable({
  providedIn: 'root'
})
export class BookingService {

// private url = 'http://localhost/app_apis/get_all_appointments.php';
  // constructor(private http: HttpClient) { }
  constructor() { }
  // getAllAppointments(){
  //   return this.http.get<Appointment>(this.base_url + 'get_all_appointments.php');
  // }
}

