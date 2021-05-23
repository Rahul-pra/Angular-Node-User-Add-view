import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {

  @Input() businessDetailForm: any;
  @Output() submitEvent = new EventEmitter();
  @Output() addNext = new EventEmitter();
  @Output() removeNext = new EventEmitter();
  @Output() goBack = new EventEmitter();
  submitted = false;

  constructor() {
    console.log("businessDetailForm ==>", this.businessDetailForm)
  }

  ngOnInit(): void {
  }

  get bf() { return this.businessDetailForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.businessDetailForm.invalid) {
      return;
    }
    console.log("this.businessDetailForm 11==>", this.businessDetailForm.value);
    this.submitEvent.emit(this.businessDetailForm)
    //console.log("this.personalDetailForm 11==>", this.personalDetailForm.value);
  }

  addNew() {
    this.addNext.emit()
  }

  deleteBranch(index: any) {
    this.removeNext.emit(index)
  }

  goBackClick() {
    this.goBack.emit()
  }


}
