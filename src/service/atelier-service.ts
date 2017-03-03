import {Atelier} from "../model/Atelier";
import {Salle} from "../model/Salle";
import {Utilisateur} from "../model/Utilisateur";
import {Participation} from "../model/Participation";
/**
 * Created by Florent on 26/02/2017.
 */
export class AtelierService {

  private static _atelierList: Array<Atelier>;

  constructor () {
    if (!AtelierService._atelierList) {
      AtelierService._atelierList = this.mockAtelierList();
    }
  }

  public getAtelierList(): Atelier[] {
    return AtelierService._atelierList;
  }

  public getAtelier(atelier: Atelier) : Atelier {
    let ateliers: Atelier[] = this.getAtelierList().filter((item) => (item == atelier));
    return ateliers[0];
  }

  public isInscrit(atelier: Atelier, utilisateur: Utilisateur): boolean {
    let ateliers: Atelier[] = this.getAtelierList().filter((item: Atelier) => {
      let rep: boolean = false;
      if (item == atelier){
        let users: Participation[] = item.participants.filter((participant: Participation) => (participant.utilisateur.identifiant == utilisateur.identifiant));
        rep = users[0] != null;
      }
      return rep;
    });
    return (ateliers.length == 1);
  }

  public addAtelier(atelier: Atelier): void {
    AtelierService._atelierList.push(atelier);
  }

  public setAtelier(atelier: Atelier) {
    AtelierService._atelierList.map((item) => {
      if (atelier.id = item.id) {
        item = atelier;
      }
    });
  }

  private mockAtelierList(): Atelier[] {
    let listAteliers: Atelier[] = [];

    let atelier1: Atelier = new Atelier();
    atelier1.id = 1;
    atelier1.nom = "Atelier Ionic";
    atelier1.date = new Date("03/03/2017");
    atelier1.theme = "Développement mobile";
    atelier1.description = "Retour d'expérience suite au développement d'une application Ionic";
    atelier1.prerequis = "Développement d'au moins une application avec Ionic";
    atelier1.salle = Salle.SanFrancisco;
    listAteliers.push(atelier1);

    let atelier2: Atelier = new Atelier();
    atelier2.id = 2;
    atelier2.nom = "Atelier Flutter";
    atelier2.date = new Date("05/05/2017");
    atelier2.theme = "Développement mobile";
    atelier2.description = "Retour d'expérience suite au développement d'une application Flutter";
    atelier2.prerequis = "Développement d'au moins une application avec Flutter";
    atelier2.salle = Salle.SanFrancisco;
    listAteliers.push(atelier2);

    let atelier3: Atelier = new Atelier();
    atelier3.id = 3;
    atelier3.nom = "Atelier Ionic vs Flutter";
    atelier3.date = new Date("06/24/2017");
    atelier3.theme = "Développement mobile";
    atelier3.description = "Comparaison des deux plateformes de développement mobile";
    atelier3.prerequis = "Développement d'au moins une application avec Flutter et une avec Ionic";
    atelier3.salle = Salle.SanFrancisco;
    listAteliers.push(atelier3);

    return listAteliers;
  }
}
