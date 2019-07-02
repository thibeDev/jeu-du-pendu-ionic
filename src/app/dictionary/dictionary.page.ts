import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../services/dictionary.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})
export class DictionaryPage implements OnInit {
    newWord: any;
    dictionary;
    dictionarySubsribtion: Subscription;

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.dictionarySubsribtion = this.dictionaryService.dictionarySubject.subscribe((dictionary)=> {
        this.dictionary = dictionary;
    })
      this.dictionaryService.emitDictionarySubject();
  }

  onAddWord() {
    this.dictionaryService.addWord(this.newWord);
    this.loadDictionary();
    this.newWord ='';
  }

  loadDictionary(){
    this.dictionary = this.dictionaryService.loadDictionary();
  }

  onDelete(word: string) {
    this.dictionaryService.removeWord(word);
  }
}
