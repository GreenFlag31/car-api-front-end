import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { downConfirmPassword, errorNotification } from '../shared/animation';
import { AuthResponseData, Authentification } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [downConfirmPassword, errorNotification],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, AfterViewInit {
  testAccount = {
    email: 'test1@gmail.com',
    password: '124567i',
  };

  loginObservable!: Observable<AuthResponseData>;
  toggleTestA = false;
  toggleLoginRegister = false;
  ErrorResponseMessage!: string;
  isLoading = false;
  error = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl(''),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.authService.inactivity) {
      this.ErrorResponseMessage = 'Logged out due to inactivity';
      this.error = true;
      this.ref.markForCheck();
      this.authService.inactivity = false;
    }
  }

  onSubmit() {
    this.isLoading = true;
    const formValues = this.loginForm.value as Authentification;

    if (this.toggleLoginRegister) {
      if (formValues.password !== formValues.confirmPassword) {
        this.ErrorResponseMessage = 'Entered passwords do not match';
        this.isLoading = false;
        this.error = true;
        return;
      }
    }

    this.error = false;
    const { email, password } = formValues;

    if (this.toggleLoginRegister) {
      this.loginObservable = this.authService.register(email, password);
    } else {
      this.loginObservable = this.authService.login(email, password);
    }

    this.loginObservable.subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (errorResponse) => {
        this.error = true;
        this.ErrorResponseMessage = errorResponse;
        this.isLoading = false;
        this.ref.markForCheck();
      },
    });
  }

  toggleTestAccount() {
    this.toggleTestA = !this.toggleTestA;
    this.toggleLoginRegister = false;
    this.error = false;

    if (this.toggleTestA) {
      this.loginForm.setValue({
        email: this.testAccount.email,
        password: this.testAccount.password,
        confirmPassword: '',
      });
    } else {
      this.loginForm.setValue({
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  }

  toggleRegister() {
    this.toggleLoginRegister = !this.toggleLoginRegister;
    if (this.toggleTestA) {
      this.loginForm.setValue({
        email: '',
        password: '',
        confirmPassword: '',
      });
      this.toggleTestA = false;
    }
    this.error = false;
    this.ref.markForCheck();
  }
}
