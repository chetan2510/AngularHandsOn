import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always export the component class so we can import it somewhere else.
export class HeroesComponent implements OnInit {

  // Dont call the getHeroes method directly from the service here. As it will be a syncronous call
  // whereas in the api call it will be asyncronous. So always follow the ngOnit thing when ever making an api call

  heroes: any | undefined;
  selectedHero: Hero | undefined;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  constructor(private heroService: HeroService, private messageService: MessageService) {

  //  While you could call getHeroes() in the constructor, that's not the best practice.
    //
    // Reserve the constructor for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
    //
    // Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.

  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  // // Mention it over here
  // hero = 'Windstorm';

  ngOnInit(): void {

  //  The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
    //
    // That won't work when the HeroService is actually making requests of a remote server.
    //
    // The new version waits for the Observable to emit the array of heroes—which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
    //
    // This asynchronous approach will work when the HeroService requests heroes from the server.

  //  Angular calls it shortly after creating a component. good place to put initialization logic
    this.getHeroes();
  }

}
