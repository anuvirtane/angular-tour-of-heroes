import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//Tää injectable on tarjolla juuressa mille tahansa luokalle, joka sitä "pyytää"
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //koska importattu observable ja of, saadaan ne käyttöön
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  //kun angular luo heroservicen, se lisää siihen samalla message servicen
  constructor(private messageService: MessageService) { }
}
