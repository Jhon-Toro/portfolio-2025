import { Component } from '@angular/core';
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [ContactFormComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
