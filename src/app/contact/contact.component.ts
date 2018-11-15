import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(2, Validators.min(2)),
    surname: new FormControl('', Validators.required),
    email: new FormControl(15, Validators.max(15)),
    message: new FormControl(),
  })

  constructor() { }

  ngOnInit() {
  }

}
