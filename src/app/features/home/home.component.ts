import { Component } from '@angular/core';
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
  selector: 'app-home',
  imports: [ContactFormComponent, HeroComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
