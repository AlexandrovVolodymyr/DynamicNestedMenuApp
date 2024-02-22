import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  TemplateRef,
} from '@angular/core';
import {
  MenuItem,
  MenuItemControls,
} from '../../interfaces/menu-item.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuType } from '../../enums/menu.enum';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  UntypedFormArray,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { MenuService } from '../../../layout/services/menu.service';
import { MENU_IMPORTS } from './menu.constants';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: MENU_IMPORTS,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  isMenuCollapsed = true;
  form!: FormGroup<MenuItemControls>;
  protected readonly MenuType = MenuType;

  private menuService = inject(MenuService);
  menu$: Observable<MenuItem[]> = this.menuService.menu$;

  private modalService = inject(NgbModal);

  get childrenGroup(): UntypedFormGroup[] {
    return (
      ((this.form.get('children') as UntypedFormArray)
        .controls as UntypedFormGroup[]) || []
    );
  }

  get childrenArray(): FormArray {
    return this.form.get('children') as FormArray;
  }

  get title(): AbstractControl {
    return this.form.get('title')!;
  }

  get controlInvalid(): boolean {
    return this.title.touched && this.title.invalid;
  }

  get controlRequired(): boolean {
    return this.title.touched && this.title.getError('required');
  }

  get controlMaxLength(): boolean {
    return this.title.touched && this.title.getError('maxlength');
  }

  get formValues(): MenuItem {
    return this.form.getRawValue();
  }

  ngOnInit(): void {
    this.initForm();
  }

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content, { scrollable: true });
  }

  close(): void {
    this.initForm();
    this.modalService.dismissAll('closed');
  }

  addItem(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.menuService.setMenu({
      ...this.formValues,
      icon: 'bi-' + this.form.value.icon,
    });
    this.close();
  }

  onTitleChange(event: Event, group?: FormGroup): void {
    const value = (event.target as HTMLInputElement).value
      .replace(/\s+/g, '-')
      .toLowerCase();
    !!group
      ? group.get('route')?.setValue(value)
      : this.form.get('route')?.setValue(value);
  }

  addChildren(): void {
    this.childrenArray.push(this.getMenuItemsGroup());
  }

  remove(index: number): void {
    this.childrenArray.removeAt(index);
  }

  private initForm(): void {
    this.form = this.getMenuItemsGroup();

    this.form.valueChanges.subscribe(console.log);
  }

  private getMenuItemsGroup(): UntypedFormGroup {
    return new FormGroup({
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(20)],
      }),
      route: new FormControl(),
      icon: new FormControl(),
      children: new UntypedFormArray([]),
    });
  }
}
