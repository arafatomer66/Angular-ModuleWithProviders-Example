import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  opened = true;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}
