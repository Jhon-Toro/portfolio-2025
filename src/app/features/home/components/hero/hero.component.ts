import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
