import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Nlp } from './methodsSummarizer/nlp';
/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public nlp: Nlp) {
   
    
  }

   
  status(){
  this.nlp.setText(this.resultSumm.sText) 
  this.nlp.setTitle(this.resultSumm.sTitle)
  console.log(this.nlp.getText())
  this.nlp.splitText(this.nlp.getText())
  console.log(this.nlp.getArrayObjectSentence())
  this.nlp.createObjectWord()
  this.nlp.frequenceText(this.nlp.getArrayObjectWord(), this.nlp.getArrayObjectSentence())
  console.log(this.nlp.getArrayObjectWord())
  this.nlp.upperCase(this.nlp.getArrayObjectSentence())
  console.log(this.nlp.getArrayObjectSentence())
  this.nlp.TFIDF(this.nlp.getArrayObjectWord(), this.nlp.getArrayObjectSentence())
  console.log(this.nlp.getArrayObjectWord())
  console.log(this.nlp.getArrayObjectSentence())
  this.nlp.titleResemblance(this.nlp.getTitle(), this.nlp.getArrayObjectSentence())
console.log(this.nlp.getArrayObjectSentence())
}
  
  resultSumm = {    
    sTitle: this.navParams.get('paramTitle'),
    sText: this.navParams.get('paramText'),
    sLength: this.navParams.get('paramLength')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  goBack(){
    this.navCtrl.push(HomePage);
    this.nlp.eraseArrayObjectSentence()
    this.nlp.eraseArrayObjectWord()
  }

}
