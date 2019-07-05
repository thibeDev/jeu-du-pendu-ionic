import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  public dictionarySubject = new Subject<string>();
  public dictionary;

  constructor() {
    this.dictionary = this.loadDictionary();
  }

  public loadDictionary(): Array<string> {
    return JSON.parse(localStorage.getItem('dictionary')) || [];
  }

  public emitDictionarySubject() {
    this.dictionarySubject.next(this.dictionary.slice());
  }

  public addWord(word: string) {
    if(!word){
      Swal.fire(
          'Erreur!',
          'Vous devez entrer un mot pour l\'ajouter au dictionnaire!',
          'error'
      )
    }else{
      if(this.checkIfWordExists(word)){
          Swal.fire(
              'Erreur!',
              'Ce mot existe déjà dans le dictionnaire!',
              'error'
          )
      }else{
        this.dictionary.push(DictionaryService.removeAccent(word.trim().toLowerCase()));
        this.dictionary.sort();
        localStorage.setItem('dictionary', JSON.stringify(this.dictionary));
        this.emitDictionarySubject();
      }
    }
  }

  public removeWord(word: string) {
    Swal.fire({
      title: 'Êtes-vous certain?',
      text: "Vous ne pourrez pas revenir en arrière!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez le!',
      cancelButtonText: 'annuler'
    }).then((result) => {
      if (result.value) {
        let index = this.dictionary.indexOf(word);
        if (index !== -1){
          this.dictionary.splice(index, 1);
          localStorage.setItem('dictionary', JSON.stringify(this.dictionary));
          this.emitDictionarySubject();
          Swal.fire(
              'Supprimé!',
              'Le mot <strong>' + word + '</strong> a bien été supprimé',
              'success'
          )
        }
      }
    })
  }

  public checkIfWordExists(word){
    let dictionary = this.loadDictionary();
    let index = dictionary.indexOf(word);
    if(index != -1) return true;
    else return false;
  }

  public static removeAccent(str){
    let accent = [
      /[\300-\306]/g, /[\340-\346]/g, // A, a
      /[\310-\313]/g, /[\350-\353]/g, // E, e
      /[\314-\317]/g, /[\354-\357]/g, // I, i
      /[\322-\330]/g, /[\362-\370]/g, // O, o
      /[\331-\334]/g, /[\371-\374]/g, // U, u
      /[\321]/g, /[\361]/g, // N, n
      /[\307]/g, /[\347]/g, // C, c
    ];
    let noAccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

    for(let i = 0; i < accent.length; i++){
      str = str.replace(accent[i], noAccent[i]);
    }
    return str;
  }

}
