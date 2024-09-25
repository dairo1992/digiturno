import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>admin-layout works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLayoutComponent { }
