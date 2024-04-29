import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu, SubMenu } from '../../models/menu.model';
import { SidebarState } from '../../../core/store/reducers/sidebar.reducer';
import { State, Store } from '@ngrx/store';
import { selectCurrentStructure } from 'src/app/core/store/selectors/sidebar.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  sidebarStructure$: Observable<Menu[]>;
  ngOnInit(): void {}

  constructor(private store: Store<State<SidebarState>>) {
    this.sidebarStructure$ = store.select(selectCurrentStructure);
  }
}
