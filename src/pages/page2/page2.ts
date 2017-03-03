import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Atelier} from "../../model/Atelier";
import {AtelierService} from "../../service/atelier-service";
import {Utilisateur} from "../../model/Utilisateur";

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  // icons: string[];
  items: Array<Atelier>;

  private atelierService: AtelierService = new AtelierService();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    this.items = this.atelierService.getAtelierList();
  }

  user(): Utilisateur {
    return JSON.parse(localStorage.getItem("user"));
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });
  }

  addParticipant(): void {
    if (!this.isInscrit()) {
      this.atelierService.getAtelier(this.selectedItem).addParticipant(this.user());
    } else {
      this.atelierService.getAtelier(this.selectedItem).removeParticipant(this.user());
    }
  }

  isInscrit(): boolean {
    return this.atelierService.isInscrit(this.selectedItem, this.user());
  }
}
