import {Utilisateur} from "./Utilisateur";
/**
 * Created by Florent on 26/02/2017.
 */
export class Commentaire {
  private _titre: string;
  private _contenu: string;
  private _date: Date;
  private _utilisaeur: Utilisateur;

  constructor() {
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get contenu(): string {
    return this._contenu;
  }

  set contenu(value: string) {
    this._contenu = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get utilisaeur(): Utilisateur {
    return this._utilisaeur;
  }

  set utilisaeur(value: Utilisateur) {
    this._utilisaeur = value;
  }
}
