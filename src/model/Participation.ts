import {Utilisateur} from "./Utilisateur";
/**
 * Created by Florent on 26/02/2017.
 */
export class Participation {
  private _note: number;
  private _presence: boolean;

  constructor() {
  }

  get note(): number {
    return this._note;
  }

  set note(value: number) {
    this._note = value;
  }

  get presence(): boolean {
    return this._presence;
  }

  set presence(value: boolean) {
    this._presence = value;
  }

  get utilisateur(): Utilisateur {
    return this._utilisateur;
  }

  set utilisateur(value: Utilisateur) {
    this._utilisateur = value;
  }

  private _utilisateur: Utilisateur;
}
