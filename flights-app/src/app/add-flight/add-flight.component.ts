import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.form.reset();
  }

  onReset() {
    this.form.reset();
  }
}
