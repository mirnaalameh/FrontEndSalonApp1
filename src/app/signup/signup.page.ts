import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Appointment, BookingService } from '../booking.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  // appointments: Appointment[];
  // constructor(private router: Router, private service: BookingService) { }
constructor() { }
  ngOnInit() {
    // this.service.getAllAppointments().subscribe(response =>{
    //   this.appointments = response;
    //   console.log(this.appointments);
    // });
  }


}
