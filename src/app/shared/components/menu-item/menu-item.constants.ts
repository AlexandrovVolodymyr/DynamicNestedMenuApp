import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbNavItem,
  NgbNavLink,
} from '@ng-bootstrap/ng-bootstrap';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

export const MENU_ITEM_IMPORTS = [
  NgbNavItem,
  NgbNavLink,
  NgClass,
  RouterLink,
  RouterLinkActive,
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
  NgIf,
];
