import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;  // Add the '!' to assure TypeScript it will be initialized

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }); 
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle login logic here (e.g., call AuthService)
      console.log(this.loginForm.value);
    }
  }
}
