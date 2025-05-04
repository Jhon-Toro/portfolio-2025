import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  imports: [NgOptimizedImage],
  templateUrl: './sidebar-user-component.component.html',
  styleUrl: './sidebar-user-component.component.scss'
})
export class SidebarUserComponentComponent {
  readonly isExpanded = input<boolean>(false);
}
