import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.setupForm();
  }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()) {
      this.router.navigate(['/admin/home'])
    }
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  setupForm() {
    this.form = this.fb.group([
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      },
    ]);
  }

  onLogin(): void {
    if (this.form.valid) {
      this.auth.login(this.form.value)
      alert("Te-ai logat cu succes!")
      // .subscribe(
      //   (result) => {
      //     console.log(result);
      //     alert(result);
           //this.router.navigate(['/admin/home']);
      //   },
      //   (err: Error) => {
      //     alert(err.message);
      //   }
      // );
    }
  }
}
