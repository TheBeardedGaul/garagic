import {Component} from "@angular/core";
import {NavController, Loading, LoadingController, AlertController} from "ionic-angular";
import {UtilisateurService} from "../../service/user-service";
import {Utilisateur} from "../../model/Utilisateur";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  loading: Loading;
  identifiant: string;
  password: string;

  private utilisateurService: UtilisateurService = new UtilisateurService();

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {

  }

  login() {
    if (!this.getUser()) {
      let user: Utilisateur = this.utilisateurService.authentification(this.identifiant, this.password);
      if (user) {
        this.setUser(user);
        this.navCtrl.setRoot(Page1);
      } else {
        this.showError("Accès refusé");
      }
    } else {
      this.setUser(null);
      this.navCtrl.setRoot(Page1);
    }
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Echec',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  isConnected(): boolean {
    return this.getUser() ? true : false;
  }

  isNotConnected(): boolean {
    return !this.isConnected();
  }

  getUser(): Utilisateur {
    if (localStorage.getItem("user") != "undefined") {
      return UtilisateurService.parseUtilisateur(JSON.parse(localStorage.getItem("user")));
    }
    return null;
  }

  setUser(utilisateur: Utilisateur): void {
    if (utilisateur) {
      localStorage.setItem("user", JSON.stringify(utilisateur));
    } else {
      localStorage.removeItem("user");
    }
  }

  getIdentifiant(): string {
    return this.getUser().identifiant;
  }

}
