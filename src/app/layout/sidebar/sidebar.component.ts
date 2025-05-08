import { Component, HostListener, inject, output, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { SidebarItem } from './interfaces/sidebar-item.interface';
import { SidebarHeaderComponentComponent } from "./components/sidebar-header/sidebar-header-component";
import { HrComponent } from "../../shared/components/hr/hr.component";
import { SidebarNavComponentComponent } from "./components/sidebar-nav/sidebar-nav-component";
import { SidebarSettingsComponentComponent } from "./components/sidebar-settings/sidebar-settings-component";

import { SETTINGS__SIDEBAR } from './data/settings.data';
import { SidebarUserComponentComponent } from './components/sidebar-user/sidebar-user-component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarHeaderComponentComponent,
    HrComponent,
    SidebarNavComponentComponent,
    SidebarSettingsComponentComponent,
    SidebarUserComponentComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  readonly #http = inject(HttpClient);
  readonly #sidebarItems = this.#http.get<SidebarItem[]>('assets/sidebar-items.json');
  readonly sidebarItemsSignal = toSignal(this.#sidebarItems, { initialValue: [] });

  readonly isExpanded = signal<boolean>(false);
  readonly isMobileVisible = signal<boolean>(false);
  readonly toggleChange = output<boolean>();

  isMobile = window.innerWidth <= 768;
  settings = SETTINGS__SIDEBAR;

  ngOnInit() {
    this.onResize();
  }

  toggleSidebar() {
    if (this.isMobile) {
      this.isMobileVisible.set(!this.isMobileVisible());
    } else {
      this.isExpanded.set(!this.isExpanded());
      this.toggleChange.emit(this.isExpanded());
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.isExpanded.set(true);
      this.isMobileVisible.set(false);
    }
    this.toggleChange.emit(this.isExpanded());
  }

  closeMobileSidebar() {
    if (this.isMobile) {
      this.isMobileVisible.set(false);
      setTimeout(() => {
      }, 300);
    }
  }

  onDarkModeToggle(checked: boolean) {
    console.log('Dark mode:', checked);
  }
}