import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  readonly text = input<string>('Button');
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input<boolean>(false);
  readonly click = output<void>();
  readonly link = input<string | null>();

  onClick(): void {
    if (this.link)  window.open(this.link()!, '_blank');
    if (!this.disabled) this.click.emit();
  }
}