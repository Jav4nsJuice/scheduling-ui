import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu, SubMenu } from '../../models/menu.model';
import { SidebarState } from '../../../core/store/reducers/sidebar.reducer';
import { State, Store } from '@ngrx/store';
import { selectCurrentStructure } from 'src/app/core/store/selectors/sidebar.selector';
import * as SidebarActions from '../../../core/store/actions/sidebar.action';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  sidebarStructure$: Observable<Menu[]>;
  submenuVisible: { [key: string]: boolean } = {};
  
  constructor(private store: Store<State<SidebarState>>) {
    this.sidebarStructure$ = store.select(selectCurrentStructure);
  }
  
  ngOnInit(): void {}

  updateSidebar(menu: Menu, submenu?: SubMenu) {
    this.store.dispatch(
      SidebarActions.updateSidebar({
        menu: Object.assign({}, menu, { isExpanded: true }),
        submenu: Object.assign({}, submenu, { isActive: true }),
      })
    );
  }

  showSubmenu(menu: Menu) {
    this.submenuVisible[menu.label] = true;
  }
  
  hideSubmenu(menu: Menu) {
    setTimeout(() => {
      if (!this.submenuVisible[menu.label]) {
        this.submenuVisible[menu.label] = false;
      }
    }, 500);
  }
}
