import { Component, output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styles: ``
})
export class SidebarComponent {
  chatClicked = output<void>();
}
