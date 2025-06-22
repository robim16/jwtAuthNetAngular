import { Component } from '@angular/core';
import { ResetPasswordRequest } from '../../interfaces/reset-password-request';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  resetPassword={} as ResetPasswordRequest

}
