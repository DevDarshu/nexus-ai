import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private google = createGoogleGenerativeAI({
    apiKey: environment.googleApiKey,
  });

  constructor() { }

  /**
   * Generates a response using the Vercel AI SDK and Google Gemini.
   */
  chat(prompt: string) {
    return from(
      generateText({
        model: this.google('gemini-1.5-flash'),
        prompt: prompt,
      })
    ).pipe(
      // The result from generateText is a promise that resolves to an object with a `text` property
      map(result => result.text)
    );
  }
}
