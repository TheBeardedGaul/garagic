import {Utilisateur} from "../model/Utilisateur";
/**
 * Created by Florent on 26/02/2017.
 */
export class UtilisateurService {

  private static _utilisateurList: Array<Utilisateur>;

  constructor () {
    if (!UtilisateurService._utilisateurList) {
      UtilisateurService._utilisateurList = this.mockUtilisateurList();
    }
  }

  public authentification(identifiant: string, password: string): Utilisateur {
    console.log("Tentative de connexion :", identifiant);
    let res: Utilisateur;
    let found: Array<Utilisateur> = this.getUtilisateurList()
      .filter((utilisateur) => (utilisateur.identifiant == identifiant && utilisateur.password == password));
    if (found.length == 1) {
      console.log("Utilisateur trouvé :", found[0]);
      res = found[0];
    }
    return res;
  }

  public getUtilisateurList(): Utilisateur[] {
    return UtilisateurService._utilisateurList;
  }

  public addUtilisateur(utilisateur: Utilisateur): void {
    UtilisateurService._utilisateurList.push(utilisateur);
  }

  public setUtilisateur(utilisateur: Utilisateur) {
    UtilisateurService._utilisateurList.map((item) => {
      if (utilisateur.identifiant = item.identifiant) {
        item = utilisateur;
      }
    });
  }

  private mockUtilisateurList(): Utilisateur[] {
    let listUtilisateurs: Utilisateur[] = [];

    let utilisateur1: Utilisateur = new Utilisateur();
    utilisateur1.identifiant = "ftetaud";
    utilisateur1.nom = "Tétaud";
    utilisateur1.prenom = "Florent";
    utilisateur1.password = "260386kxs";
    utilisateur1.mail = "ftetaud@sodifrance.fr";
    listUtilisateurs.push(utilisateur1);

    let utilisateur2: Utilisateur = new Utilisateur();
    utilisateur2.identifiant = "jdoe";
    utilisateur2.nom = "Doe";
    utilisateur2.prenom = "John";
    utilisateur2.password = "unknown44";
    utilisateur2.mail = "jdoe@sodifrance.fr";
    listUtilisateurs.push(utilisateur2);

    return listUtilisateurs;
  }

  static parseUtilisateur(object: any) : Utilisateur {
    let user: Utilisateur;
    if (object) {
      user = new Utilisateur();
      user.identifiant = object._identifiant;
      user.nom = object._nom;
      user.prenom = object._prenom;
      user.mail = object._mail;
      user.password = object._password;
    }
    return user;
  }
}
