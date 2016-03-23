import {Component} from 'angular2/core';
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
export class AppComponent {
    title = 'Tour of Heroes';
    selectedHero : Hero;    
    heroes: Hero[];
    onSelect(hero: Hero) { this.selectedHero = hero; }
    constructor(private _heroService: HeroService) {}
    getHeroes(){
        this.heroes = this._heroService.getHeroes();
    }
    
    ngOnInit(){
        this.getHeroes();
    }
}

