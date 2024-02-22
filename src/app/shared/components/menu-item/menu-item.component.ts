import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MENU } from '../../constants/menu.constants';
import { MenuType } from '../../enums/menu.enum';
import { MENU_ITEM_IMPORTS } from './menu-item.constants';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: MENU_ITEM_IMPORTS,
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  @ViewChildren('dropdown') dropdown!: QueryList<NgbDropdown>;
  @Input({ required: true }) menuItem!: MenuItem;
  @Input() type: MenuType = MenuType.MAIN;
  autoClose: true | false | 'outside' | 'inside' = 'outside';
  protected readonly menu = MENU;
  protected readonly MenuType = MenuType;

  private router = inject(Router);

  get isHasChildren(): boolean {
    return !!this.menuItem.children?.length;
  }

  openPage(): void {
    if (!this.isHasChildren) {
      this.router.navigate([`${this.menuItem.route}`]);
    }
  }

  closeMenu(item: MenuItem, event?: MouseEvent): void {
    event?.stopPropagation();
    if (!item.children?.length) {
      this.dropdown.forEach((d) => d.close());
      this.router.navigate([`${item.route}`]);
    }
  }
}
