import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  private result: boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.word = this.activatedRoute.snapshot.params['word'];
    this.wordArray = Array.from(this.word);
    for(let x of this.wordArray){
      this.hidedWord.push('_');
    }
  }

  onClickLetter(x: string) {
    if(this.checkLetter(x) == false){
      if (this.lifes == 0){
        this.result = false;
      }
      else this.lifes --;
    }
  }

  checkLetter(letter, i = 0){
    let index = this.wordArray.indexOf(letter, i);
    if(index == -1 && i == 0) return false;
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
