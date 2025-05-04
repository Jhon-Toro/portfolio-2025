import { Component, HostListener, inject, OnInit, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { SidebarItem } from './interfaces/sidebar-item.interface';
import { SettingItem } from './interfaces/settings-item.interface';
import { SidebarHeaderComponentComponent } from "./components/sidebar-header-component/sidebar-header-component.component";
import { HrComponent } from "../../shared/components/hr/hr.component";
import { SidebarNavComponentComponent } from "./components/sidebar-nav-component/sidebar-nav-component.component";
import { SidebarSettingsComponentComponent } from "./components/sidebar-settings-component/sidebar-settings-component.component";
import { SidebarUserComponentComponent } from "./components/sidebar-user-component/sidebar-user-component.component";
import { SETTINGS__SIDEBAR } from './data/settings.data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarHeaderComponentComponent, HrComponent, SidebarNavComponentComponent, SidebarSettingsComponentComponent, SidebarUserComponentComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  readonly #http = inject(HttpClient);
  readonly #sidebarItems = this.#http.get<SidebarItem[]>('assets/sidebar-items.json');
  readonly sidebarItemsSignal = toSignal(this.#sidebarItems, { initialValue: [] });
  readonly isExpanded = signal<boolean>(false);
  isMobile = window.innerWidth <= 768;
  settings = SETTINGS__SIDEBAR;

  ngOnInit() {
    this.onResize();
  }

  toggleSidebar() {
    this.isExpanded.set(!this.isExpanded());
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.isExpanded.set(true);
    }
  }

  onDarkModeToggle(checked: boolean) {
    console.log('Dark mode:', checked);
  }
}