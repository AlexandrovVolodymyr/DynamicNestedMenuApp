import { FormControl, UntypedFormArray } from '@angular/forms';

export interface MenuItem {
  title: string;
  icon: string;
  route: string;
  children?: MenuItem[];
}

export interface MenuItemControls {
  title: FormControl<string>;
  icon: FormControl<string>;
  route: FormControl<string>;
  children: UntypedFormArray;
}
