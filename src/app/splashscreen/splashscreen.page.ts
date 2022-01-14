import { PokeApiService } from './../services/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private router: Router,
    private pokeApiService: PokeApiService) {
    this.menu.enable(false);
    //  this.menu.swipeEnable(false);
  }

  async ngOnInit() {

    try {
      const data: any = await this.pokeApiService.getPokemonsOffSet(20, 0);
      console.log(data.results);
      // this.navController.navigateForward('home',data.results);
      const navigationExtras: NavigationExtras = { state: { pokemon: data.results } };
      
      this.router.navigate(['home'], navigationExtras);

    } catch (err) {
      console.log(err);
    }


  }

  ionViewWillLeave() {
    this.menu.enable(true);
    // this.menu.swipeEnable(true);
  }
}
