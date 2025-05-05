import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  readonly isSidebarExpanded = signal<boolean>(false);

  onSidebarToggle(isExpanded: boolean) {
    this.isSidebarExpanded.set(isExpanded);
  }
}
