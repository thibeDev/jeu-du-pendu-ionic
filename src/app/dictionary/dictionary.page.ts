import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../services/dictionary.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})
export class DictionaryPage implements OnInit {
    newWord: any;
    dictionary;
    dictionarySubsribtion: Subscription;

  constructor(private dictionaryService: DictionaryService, private router: Router) { }

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

  onSelectWord(word: any) {
    this.router.navigateByUrl('menu/new-game/' + word);
  }
}
