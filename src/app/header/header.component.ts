import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() { }
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  ngOnInit(): void {

  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }


  // Ajoutez cette fonction pour fermer le menu après avoir sélectionné un élément
  closeMenu() {
    this.menuVariable = false;
  }
  // Cette fonction sera appelée lorsque l'utilisateur fera défiler la page
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.closeMenu();
  }

}

