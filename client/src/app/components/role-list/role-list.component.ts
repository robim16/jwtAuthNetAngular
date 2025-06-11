import { Component, Input } from '@angular/core';
import { Role } from '../../interfaces/role';

@Component({
  selector: 'app-role-list',
  imports: [],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css'
})
export class RoleListComponent {
  @Input() roles!:Role[] | null
}
