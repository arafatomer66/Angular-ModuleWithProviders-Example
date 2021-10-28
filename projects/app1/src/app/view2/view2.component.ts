import { User } from '../shared/model/user';
import { ApiService } from './../shared/services/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  UserData: any = [];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'lastName', 'emailAddress', 'address', 'action'];

  constructor(private api: ApiService) {
    this.api.GetUsers().subscribe(data => {
      this.UserData = data;
      this.dataSource = new MatTableDataSource<User>(this.UserData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() { }

  deleteUser(index: number, e: any) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.api.DeleteUser(e.id).subscribe();
    }
  }

}
