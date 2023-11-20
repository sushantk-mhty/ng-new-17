import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  students:Student[]=[
    {id:1,name:'Thomas',dob:new Date(2002,3,15),totalmarks:435},
    {id:2,name:'Jerry',dob:new Date(2002,5,5),totalmarks:420},
    {id:3,name:'Tina',dob:new Date(2003,1,1),totalmarks:387},
    {id:4,name:'Vinay',dob:new Date(2004,6,2),totalmarks:401},
    {id:5,name:'Gokul',dob:new Date(2002,10,7),totalmarks:335},
  ]

}
