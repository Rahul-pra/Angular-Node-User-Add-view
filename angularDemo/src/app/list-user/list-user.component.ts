import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ButtonRenderComponent } from '../button-render/button-render.component'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  usersList: any;
  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};


  constructor(
    private appService: AppService,
  ) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRenderComponent,
    }
  }


  columnDefs = [
    { field: 'name' },
    { field: 'email' },
    { field: 'dateOfBirth' },
    { field: 'contactNo' },
    { field: 'businessName' },
    {
      headerName: 'Action',
      cellRenderer: (params: any) => {
        // put the value in bold
        return '<button type="button" class="btn btn-primary mr-1" (click)="onClick($event)">Edit </button>';
      },
      cellRendererParams: {
        clicked: this.onBtnClick1.bind(this),
        label: 'Click 1'
      }
    },

  ];

  rowData = [
    { name: 'Toyota', email: 'Celica', dateOfBirth: 35000, contactNo: 'Toyota', businessName: 'Celica', },
    { name: 'Toyota', email: 'Celica', dateOfBirth: 35000, contactNo: 'Toyota', businessName: 'Celica', },
    { name: 'Toyota', email: 'Celica', dateOfBirth: 35000, contactNo: 'Toyota', businessName: 'Celica', },

  ];


  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.appService.getUsers().subscribe((res: any) => {
      if (res.status) {
        this.usersList = res.data
        this.setDataOnTable()
      }
      console.log("this.usersList ==>", this.usersList)
    })
  }

  setDataOnTable() {
    this.rowData = []
    this.usersList.forEach((user: any, i: any) => {
      var newUser = {
        name: user.name,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        contactNo: user.contactNo,
        businessName: user.businessName,
      };
      this.rowData.push(newUser)
    });
  }

  onBtnClick1(e: any) {
    console.log("e ==>", e)
    this.rowDataClicked1 = e.rowData;
  }

  onBtnClick2(e: any) {
    this.rowDataClicked2 = e.rowData;
  }

  onClick(e: any) {
    console.log("e ==>", e)
  }

}
