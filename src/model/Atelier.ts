import {Salle} from "./Salle";
import {Utilisateur} from "./Utilisateur";
import {Participation} from "./Participation";
import {Commentaire} from "./Commentaire";
import {UUID} from "angular2-uuid";
/**
 * Created by Florent on 26/02/2017.
 */
export class Atelier {
  private _id: number;
  private _nom: string;
  private _date?: Date;
  private _theme?: string;
  private _description?: string;
  private _prerequis?: string;
  private _salle?: Salle;
  private _organisateurs?: Array<Utilisateur>;
  private _participants?: Array<Participation>;
  private _commentaires?: Array<Commentaire>;

  constructor() {
    this._organisateurs = [];
    this._participants = [];
    this._commentaires = [];
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get theme(): string {
    return this._theme;
  }

  set theme(value: string) {
    this._theme = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get prerequis(): string {
    return this._prerequis;
  }

  set prerequis(value: string) {
    this._prerequis = value;
  }

  get salle(): Salle {
    return this._salle;
  }

  set salle(value: Salle) {
    this._salle = value;
  }

  get organisateurs(): Array<Utilisateur> {
    return this._organisateurs;
  }

  set organisateurs(value: Array<Utilisateur>) {
    this._organisateurs = value;
  }

  get participants(): Array<Participation> {
    return this._participants;
  }

  set participants(value: Array<Participation>) {
    this._participants = value;
  }

  get commentaires(): Array<Commentaire> {
    return this._commentaires;
  }

  set commentaires(value: Array<Commentaire>) {
    this._commentaires = value;
  }

  getDateFormatee(): string {
    let day: string = ('0' + this._date.getDate()).slice(-2);
    var month: string = ('0' + (this._date.getMonth()+1)).slice(-2);
    var year: number = this._date.getFullYear();
    return [day, month, year].join('/');
  }

  addParticipant(utilisateur: Utilisateur): void {
    let part: Participation = new Participation();
    part.utilisateur = utilisateur;
    this.participants.push(part);
  }

  removeParticipant(utilisateur: Utilisateur): void {
    let participants: Participation[] = this.participants.filter((item: Participation) => (item.utilisateur.identifiant != utilisateur.identifiant));
    this.participants = participants;
  }
}
