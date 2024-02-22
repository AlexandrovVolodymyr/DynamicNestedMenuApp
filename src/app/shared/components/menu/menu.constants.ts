import { MenuItemComponent } from '../menu-item/menu-item.component';
import {
  NgbCollapse,
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbNav,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  AsyncPipe,
  JsonPipe,
  NgClass,
  NgForOf,
  NgTemplateOutlet,
} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export const MENU_IMPORTS = [
  MenuItemComponent,
  NgbNav,
  NgbCollapse,
  RouterLinkActive,
  RouterLink,
  NgbDropdownMenu,
  NgbDropdown,
  NgForOf,
  NgTemplateOutlet,
  NgbDropdownToggle,
  NgClass,
  ReactiveFormsModule,
  AsyncPipe,
  JsonPipe,
];
