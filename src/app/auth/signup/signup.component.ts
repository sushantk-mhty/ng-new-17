import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../angular-material/angular-material.module';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,AngularMaterialModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
