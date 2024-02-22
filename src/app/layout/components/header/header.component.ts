import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent } from '../../../shared/components/menu/menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
