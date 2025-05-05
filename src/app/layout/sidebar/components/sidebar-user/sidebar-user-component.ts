import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  imports: [NgOptimizedImage],
  templateUrl: './sidebar-user-component.html',
  styleUrl: './sidebar-user-component.scss'
})
export class SidebarUserComponentComponent {
  readonly isExpanded = input<boolean>(false);
}
