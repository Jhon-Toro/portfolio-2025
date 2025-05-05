import { Component, input, output } from '@angular/core';
import { SettingItem } from '../../interfaces/settings-item.interface';
import { SidebarItem } from '../../interfaces/sidebar-item.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar-nav',
  imports: [NgOptimizedImage],
  templateUrl: './sidebar-nav-component.html',
  styleUrl: './sidebar-nav-component.scss'
})
export class SidebarNavComponentComponent {
  readonly sidebarItems = input<SidebarItem[]>([]);
  readonly isExpanded = input<boolean>(false);
}
