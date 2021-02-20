import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-tabs-item',
  templateUrl: './nav-tabs-item.component.html',
  styleUrls: ['./nav-tabs-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavTabsItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
