import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// services
import { MessageService } from './Message.service';

// components
import { Hero } from './Hero';

// data
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
  
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
