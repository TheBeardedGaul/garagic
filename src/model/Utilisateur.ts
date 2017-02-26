/**
 * Created by Florent on 26/02/2017.
 */
export class Utilisateur {
  private nom: string;
  private prenom: string;
  private _password: string;

  constructor() {
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  private mail: string;
}
