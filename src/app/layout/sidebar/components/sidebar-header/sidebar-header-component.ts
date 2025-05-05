import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  imports: [NgOptimizedImage],
  templateUrl: './sidebar-header-component.html',
  styleUrl: './sidebar-header-component.scss'
})
export class SidebarHeaderComponentComponent {
  readonly isExpanded = input<boolean>(false);
}
