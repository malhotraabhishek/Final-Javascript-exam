import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { StudentsComponent } from "./students/students.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, JumbotronComponent, FooterComponent]
})
export class AppComponent {
  title = 'myApp';
}
