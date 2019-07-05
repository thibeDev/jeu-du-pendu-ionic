import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import Alphabet from '../models/alphabet';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  lifes: number = 7;
  word: string;
  wordArray;
  hidedWord: string[] = [];
  alphabet;
  wrongLetters = [];
  private result: boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.alphabet = new Alphabet().alphabet;
    this.word = this.activatedRoute.snapshot.params['word'];
    this.wordArray = Array.from(this.word);
    for(let x of this.wordArray){
      this.hidedWord.push('_');
    }
  }

  onClickLetter(x) {
    if(this.checkLetter(x.letter) == false){
      x.color = 'danger';
      this.lifes --;
      if (this.lifes == 1){
        this.result = false;
      }
    }
    else{
        x.color= 'success';
    }
  }

  checkLetter(letter, i = 0){
    let index = this.wordArray.indexOf(letter, i);
    if(index == -1 && i == 0){
      return false;
    }
    if(index != -1){
      this.hidedWord.splice(index, 1, letter);
      if(this.hidedWord.indexOf('_') == -1){
        this.result = true;
        return;
      }
      this.checkLetter(letter, index + 1);
    }
  }
}
