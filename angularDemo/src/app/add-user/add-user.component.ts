import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  activeTabName: any;
  personalDetailForm: FormGroup;
  personalDetailFormData: any;
  businessDetailForm: FormGroup;
  businessDetailFormData: any;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {
    this.activeTabName = 'personal_detail';
    this.personalDetailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
    })
    this.businessDetailForm = this.fb.group({
      businessName: ['', Validators.required],
      branches: this.fb.array([this.createBranches()])
    })
  }

  ngOnInit(): void {
  }

  // get pf() { return this.personalDetailForm.controls; }

  activeTab(tabName: any) {
    this.activeTabName = tabName;
  }

  personalDetailFormSubmit($event: any) {
    this.personalDetailFormData = $event;
    this.activeTab('business_details')
    console.log("personalDetailFormChild 111 ==>", $event)
  }

  businessDetailFormSubmit($event: any) {
    this.businessDetailFormData = $event;
    console.log("businessDetailFormData 111 ==>", $event)
    this.saveUser()
  }

  createBranches() {
    return this.fb.group({
      areaName: ['', Validators.required],
      contactNo: ['', Validators.required],
    })
  }

  addNext() {
    (this.businessDetailForm.controls['branches'] as FormArray).push(this.createBranches())
  }

  removeNext(index: any) {
    (this.businessDetailForm.controls['branches'] as FormArray).removeAt(index);
  }

  goBack() {
    this.activeTab('personal_detail')
  }

  saveUser() {
    if (this.personalDetailFormData.invalid) {
      this.activeTab('personal_detail')
    }
    if (this.businessDetailFormData.invalid) {
      this.activeTab('business_details')
    }
    if (this.personalDetailFormData.value && this.businessDetailFormData.value) {
      let data = {
        personalDetailFormData: this.personalDetailFormData.value,
        businessDetailFormData: this.businessDetailFormData.value
      }
      this.appService.saveUser(data).subscribe((res: any) => {
        this.personalDetailForm.reset();
        this.businessDetailForm.reset();
        this.router.navigate(['/listUser']);
      })
    }
  }

}
