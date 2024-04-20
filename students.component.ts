import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    // NgFor, service service
    
    NgFor,
   
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: any[] = [
    { name: 'Student 1', age: 18 },
    { name: 'Student 2', age: 22 }
  ];


}
