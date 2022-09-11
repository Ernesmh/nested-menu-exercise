import { Component } from '@angular/core';
import { NestedMenuElement } from '../../models/nested-menu.interface';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  /**
   * Top menu level array of elements
   */
  public mainMenuLevelElements: NestedMenuElement[] = [];

  /**
   * Data for the child menu component
   */
  public menuData: NestedMenuElement[] = [];

  /**
   * @param menuService Menu Service
   */
  constructor(private menuService: MenuService){
    this.getMenuElementsData();
  }
   
  /**
   * Method to recover the data first level to build the nested menu component
   */
  private getMenuElementsData(): void {
    this.menuService.getMenuElements().subscribe((elementsArray: NestedMenuElement[]) => {
      this.menuData = elementsArray.filter(elem => !elem.parentId);
    })
  }
}
