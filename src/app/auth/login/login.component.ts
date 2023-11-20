import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../angular-material/angular-material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,AngularMaterialModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
