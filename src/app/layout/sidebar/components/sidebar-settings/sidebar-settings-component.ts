import { NgOptimizedImage } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { SettingItem } from '../../interfaces/settings-item.interface';
import { SwitchComponent } from "../../../../shared/components/switch/switch.component";

@Component({
  selector: 'app-sidebar-settings',
  imports: [NgOptimizedImage, SwitchComponent],
  templateUrl: './sidebar-settings-component.html',
  styleUrl: './sidebar-settings-component.scss'
})
export class SidebarSettingsComponentComponent {
  readonly settings = input<SettingItem[]>([]);
  readonly isExpanded = input<boolean>(false);

  readonly toggleSidebar = output<void>();
  readonly darkModeToggle = output<boolean>();

  onToggle(checked: boolean) {
    this.darkModeToggle.emit(checked);
  }

  onCollapseClick() {
    this.toggleSidebar.emit();
  }
}
