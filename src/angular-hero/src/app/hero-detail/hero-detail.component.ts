import { Component, OnInit, Input } from '@angular/core'
import { Hero } from '../hero'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  @Input()
  hero: Hero
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero))
  }
  goBack(): void {
    this.location.back()
  }
  save (): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack())
  }
  ngOnInit() {
    this.getHero()
  }
}
