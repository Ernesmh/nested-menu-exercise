import { Component, Input} from '@angular/core';
import { NestedMenuElement } from 'src/app/models/nested-menu.interface';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})
export class NestedMenuComponent {

  /**
   * Incoming data to build the nested menu
   */
  @Input() data: NestedMenuElement[] = [];

  /**
   * Text to show at the expandable button
   */
  @Input() buttonText = 'Click me to show content';

  /**
   * Property to identify if it's the main menu or sublevels menu
   */
  @Input() isMainButton = true;

  /**
   * Flag to avoid making more requests than needed
   */
  private dataLoaded = false;


  /**
   * @param menuService Menu Service
   */
  constructor(private menuService: MenuService) { }

  /**
   * Method to look for sublevels at the service
   * 
   * @param element element to check sublevels
   * @returns if the checked element has sublevels
   */
  public hasSubLevels(element: NestedMenuElement): boolean {
    return this.menuService.hasChildren(element);
  }

  /**
   * Method to look for children elements
   * @param elementName element to check sublevels
   */
  public checkForChildren(elementName: string) {
    if (!this.dataLoaded) {
      this.data = this.menuService.checkChildren(elementName)
      this.dataLoaded = true;
    }
  }
}
