import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

export const routes: Routes = [
    // home - student component
    {
        path: '',
        component: StudentsComponent
    },
    // student component
    {
        path: 'students',
        component: AppComponent
    }
];
