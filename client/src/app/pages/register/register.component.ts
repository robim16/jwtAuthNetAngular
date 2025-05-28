import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { Router, RouterLink } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { Observable } from 'rxjs';
import { Role } from '../../interfaces/role';

@Component({
  selector: 'app-register',
  imports: [MatInputModule, ReactiveFormsModule, RouterLink, MatSelectModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  roleService = inject(RoleService)
  roles$!:Observable<Role[]>;
  fb = inject(FormBuilder);
  registerForm!: FormGroup;
  router = Inject(Router);
  confirmPasswordHide: boolean = true;
  passwordHide: boolean = true


  register(){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      fullName: ['', Validators.required],
      roles: [''],
      confirmPassword: ['', Validators.required]
    })
  }
}
