import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DictionaryService} from '../services/dictionary.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
})
export class NewGamePage implements OnInit {

  public word: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      private dictionaryService: DictionaryService,
      private router: Router
      ) { }

  ngOnInit() {
    this.word = this.activatedRoute.snapshot.params['word'];
  }

  onReloadWord() {
    let dictionary = this.dictionaryService.loadDictionary();
    this.word =  dictionary[Math.floor(Math.random() * dictionary.length)];
  }

  onStartGame(word: string) {
    if(word)
      this.router.navigateByUrl('menu/game/' + word);
    else{
      Swal.fire(
          'Erreur!',
          'Vous devez entrer un mot pour commencer la partie!',
          'error'
      )
    }
  }
}
