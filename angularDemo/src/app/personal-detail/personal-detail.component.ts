import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {
  @Input() personalDetailForm: any;
  @Output() submitEvent = new EventEmitter();
  submitted = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log("personalDetailForm ==>", this.personalDetailForm)
  }

  get pf() { return this.personalDetailForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.personalDetailForm.invalid) {
      return;
    }

    this.submitEvent.emit(this.personalDetailForm)
    //console.log("this.personalDetailForm 11==>", this.personalDetailForm.value);
  }

}
