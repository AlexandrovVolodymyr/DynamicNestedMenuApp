import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MENU } from '../../shared/constants/menu.constants';
import { MenuItem } from '../../shared/interfaces/menu-item.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuData$: BehaviorSubject<MenuItem[]> = new BehaviorSubject(MENU);
  menu$ = this.menuData$.asObservable();

  setMenu(item: MenuItem): void {
    const menu = this.menuData$.value;
    this.menuData$.next([...menu, item]);
  }
}
