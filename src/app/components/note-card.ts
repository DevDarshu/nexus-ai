import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './note-card.html',
  styles: ``
})
export class NoteCardComponent {
  title = input.required<string>();
  extract = input.required<string>(); // Short summary
  tags = input<string[]>([]);
  date = input<Date>(new Date());
}
