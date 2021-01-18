import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroes: any | undefined;

  // Annotation to inform the component that a input will come
  @Input() hero: Hero | undefined;

  constructor( private route: ActivatedRoute,
               private heroService: HeroService,
               private location: Location
  ) { }

  // ng generate component hero-detail --> hero-detail.component.html ...
  // Class name will be HeroDetailComponent

  ngOnInit(): void {

    this.getHero();
  }

  getHero(): void {

    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id'); // way to get the id from the url
    this.heroes = this.heroService.getHeroes();
    for(let i = 0; i < this.heroes.length; i++) {
      console.log(i);
      if(id === this.heroes[i].id) {
        this.hero = this.heroes[i];
        break;
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}
