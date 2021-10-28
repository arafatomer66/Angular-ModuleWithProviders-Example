import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ApiService } from './../shared/services/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetUserForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  userForm: FormGroup;

  ngOnInit() {
    this.submitBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private UserApi: ApiService
  ) { }

  /* Reactive book form */
  submitBookForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      address: ['', [Validators.required]],
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }

  /* Submit book */
  submitUserForm() {
    if (this.userForm.valid) {
      this.UserApi.AddUser(this.userForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/app1/two'))
      });
    }
  }
}
