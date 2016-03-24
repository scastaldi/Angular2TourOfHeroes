import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/styles.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]    
})
export class AppComponent implements OnInit {
    constructor(private _heroService: HeroService) {}
    title = 'Tour of Heroes';
    selectedHero : Hero;    
    heroes: Hero[];
    onSelect(hero: Hero) { this.selectedHero = hero; }
    getHeroes(){
        //this.heroes = this._heroService.getHeroes();
        this._heroService.getHeroesSlowly().then(
            heroes => this.heroes = heroes
        );
    }
    
    ngOnInit(){
        this.getHeroes();
    }
}

