import { Injectable } from '@angular/core';
import { NESTED_MENU } from '../constants/nested-menu';
import {delay, Observable, of} from 'rxjs';
import { NestedMenuElement } from '../models/nested-menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  /**
   * Array of Nested Menu elements
   */
  public menuElements: NestedMenuElement[];

  constructor() {
    // This data should come from an API GET request. Mocked with the constant
    this.menuElements = NESTED_MENU;
   }

  /**
   * Method to get the elements for the nested menu component
   * @returns array of elements
   */
  public getMenuElements(): Observable<NestedMenuElement[]> {
    return of(this.menuElements).pipe(delay(1000));
  }

  /**
   * Method to check and recover the children array of an element
   * 
   * @param itemName name of the item
   * @returns array of elements
   */
  public checkChildren(itemName: string): NestedMenuElement[]{
    const item = this.menuElements.find((elem: NestedMenuElement) => elem.name === itemName);
    const arr = this.menuElements.filter(elem => elem.parentId === item?.id);
    return arr;
  }

  /**
   * Method to check if the level has sublevels
   * 
   * @param element item to check
   * @returns if the item has children or not
   */
  public hasChildren(element: NestedMenuElement): boolean {
    return !!this.menuElements.find(elem => elem.parentId === element.id);
  }
}
