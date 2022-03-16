import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  });

  userName: string = "";
  password: string = "";
  isUserValid?: string;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
  }

  login(): void {
    this.userName = this.loginForm.value.userName
    this.password = this.loginForm.value.password
   
    let resp = this.http.get(`http://localhost:8080/login?name=${this.userName}&password=${this.password}`);
    resp.subscribe((data) => {
      console.log(data)
      if (data == true) {
        this.router.navigate(['/home']);
      }



    });

  }

}
