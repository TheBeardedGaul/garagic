/**
 * Created by Florent on 26/02/2017.
 */
export class Utilisateur {
  private _identifiant: string;
  private _nom: string;
  private _prenom: string;
  private _password: string;
  private _mail: string;

  constructor() {
  }

  get identifiant(): string {
    return this._identifiant;
  }

  getIdentifiant(): string {
    return this._identifiant;
  }

  set identifiant(value: string) {
    this._identifiant = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
