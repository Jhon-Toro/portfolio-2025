import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  readonly checked = input<boolean>(false);
  readonly toggle = output<boolean>();

  onToggle(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.checked;
    this.toggle.emit(newValue);
  }
}
