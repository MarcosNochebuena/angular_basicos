import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DBZService {
  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 8500 },
  ];
  get personajes() {
    return [...this._personajes];
  }
  constructor() {}
  agregarNuevoPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
