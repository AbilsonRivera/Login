import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';  // Asegúrate de importar Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({});
  errorMessage: string = '';

  // Datos quemados para la autenticación
  validUser = {
    email: 'test@example.com',
    password: '123456'
  };

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private router: Router) {}  // Inyectar Router

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (email === this.validUser.email && password === this.validUser.password) {
      console.log('Login successful');
      this.errorMessage = '';
      this.router.navigate(['/hola']);
    } else {
      console.log('Login failed');
      this.errorMessage = 'Incorrect email or password. Please try again.';
    }
  }
}
