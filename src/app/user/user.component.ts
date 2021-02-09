import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators }from  '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router, private formBuilder: FormBuilder) { }
    signupForm! : FormGroup;
    isSubmitted = false;
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname :['', Validators.required],
      othername: ['', Validators.required]
    });
  }
  get formControls() { return this.signupForm.controls; }
  signup(){
    console.log(this.signupForm.value);
    this.isSubmitted = true;
    if(this.signupForm.invalid){
      return;
    }
    this.authService.login(this.signupForm.value);
    this.router.navigateByUrl('/login');
  }
  // logout(){
  //   this.authService.logout();
  //   this.router.navigateByUrl('/login');

  // }

}
