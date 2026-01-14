import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar';
import { NoteCardComponent } from './components/note-card';
import { AiService } from './services/ai';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NoteCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private aiService = inject(AiService);

  // Mock Data for "Advanced" Feel
  notes = [
    {
      title: 'Project Ideas 2026',
      extract: 'Build a personal knowledge assistant using Angular and Vercel AI SDK. Focus on applied AI engineering and learning...',
      tags: ['ideas', 'planning'],
      date: new Date()
    },
    {
      title: 'Meeting Notes: Q1 Goals',
      extract: 'Discussed the roadmap for the new product launch. Key takeaways: improved performance, better UI/UX, and AI integration.',
      tags: ['work', 'meeting'],
      date: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
    },
    {
      title: 'Angular 19 Features',
      extract: 'Signals are the future. Need to explore input(), output(), and signal queries for cleaner code structure.',
      tags: ['learning', 'angular'],
      date: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
    }
  ];

  aiResponse: string | null = null;
  isLoading = false;

  triggerChat() {
    const prompt = 'Project Ideas 2026';
    this.isLoading = true;
    this.aiResponse = null;

    this.aiService.chat(prompt).subscribe({
      next: (response) => {
        this.aiResponse = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('AI Error', err);
        this.aiResponse = 'Error occurred: ' + err.message;
        this.isLoading = false;
      }
    });
  }
}
